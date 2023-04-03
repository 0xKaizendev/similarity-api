import { authOptions } from "@/libs/auth";
import { db } from "@/libs/db";
import { CreateApiData } from "@/types/api/key";
import { NextApiRequest , NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import {nanoid} from "nanoid"
import {z} from 'zod'
import { toast } from "@/components/ui/Toast";
import callWithMehods from "@/libs/api-middlewars/methods";
const handler = async (
     req : NextApiRequest , 
    res : NextApiResponse<CreateApiData>) => {

        try {
            const user   = await getServerSession(req , res , authOptions).then(
                (res) => res?.user
            )

            if(!user) {
                return res.status(401).json({
                    error: "Action non autorisée" , 
                    createdApiKey : null
                })
            }

            const existingKey = await db.apiKey.findFirst({
                where: {userId : user.id , enabled : true}
            })

            if(existingKey) {
                return res.status(400).json({
                    error: "Vous avez une clé de valide encore disponible", 
                    createdApiKey: null
                })
            }

            const createdApiKey = await db.apiKey.create({
                data: {
                    userId : user.id , 
                    key : nanoid(32)
                }
            })

            return res.status(200).json({error: '' , createdApiKey})
        } catch (error) {
            if(error instanceof z.ZodError) {
              return res.status(400).json({error: error.issues , createdApiKey : null})
            }

            return res.status(500).json({
                error:  "Erreur systeme interne" , 
                createdApiKey:  null
            })
        }
    }
   
export default callWithMehods(['GET'], handler) ;  