
import callWithMehods from "@/libs/api-middlewars/methods"
import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"

const reqSchema = z.object({
    text1 : z.string().max(1000) , 
    text2 : z.string().max(1000)
})

const handler = async (req : NextApiRequest , res: NextApiResponse) => {
    
    const body = req.body as unknown 
    const apiKey = req.headers.authorization

    if(!apiKey) 
    {
        return res.status(401).json({
            error : "Unauthorized request "
        })
    
    }

    const parsed = reqSchema.safeParse(body) ;  

    // check if body is formatted like reqSchema object 
    if(!parsed.success) {
         return res.status(400).json({
            error :  "Bad Request : Check body of your request "
         })
    }

    try {
        const {text1, text2} = parsed.data ; 

    } catch (error) {
        if(error instanceof z.ZodError) {
            return res.status(400).json({
                error : error.issues 
            })
        }

        return res.status(500).json({
            error : " Internal server error "
        })
    }


}



export default callWithMehods(['POST'], handler)