
import callWithMehods from "@/libs/api-middlewars/methods";
import { db } from "@/libs/db";
import { openai } from "@/libs/openai";
import { NextApiRequest, NextApiResponse } from "next";
import { text } from "stream/consumers";
import { z } from "zod";
import similarity from '@/helpers/cosineSimilarity' 

const requestSchema = z.object({
  text1: z.string().max(2000),
  text2: z.string().max(2000),
});
const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const body = request.body as unknown;
  const apiKey = request.headers.authorization;
  if (!apiKey) {
    return response.status(401).json({ error: "You're not authorized" });
  }
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return response.status(400).json({ error: "Invalid request schema" });
  }
  try {
    const {text1,text2}= requestSchema.parse(body)
    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      }
    });
    if (!validApiKey) { 
        return response.status(404).json({ error: "Invalid api key" });
    }

    const  start = new Date()
    const embedding = await Promise.all(
        [text1,text2].map( async text=>{
            const res = await openai.createEmbedding({
                model:'text-embedding-ada-002',
                input:text
            })
            return res.data.data[0].embedding 
        })
    )

   const similarityResult  = similarity({text1 , text2})

   const duration = new Date().getTime() - start.getTime() ; 

   // record request infos 

   await db.apiRequest.create({
    data : {
        duration , 
        method : request.method as string , 
        path : request.url as string , 
        status : 200 , 
       apiKeyId: validApiKey.id , 
       usedApiKey : validApiKey.key, 
    }
   })

   return response.status(200).json({
    success : true , 
    
   })

  } catch (error) {}
};
export default callWithMehods(["GET", "POST"], handler);
