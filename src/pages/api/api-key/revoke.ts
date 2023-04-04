import callWithMehods from "@/libs/api-middlewars/methods";
import { authOptions } from "@/libs/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { RevokeApiData } from "@/types/api/key";

const handler = async (req:  NextApiRequest, res: NextApiResponse <RevokeApiData> ) => {

    try {
        const user = await getServerSession(req , res , authOptions).then(
            (res) => res?.user
        ) 
        if(!user) {
            return res.status(401).json({
                error:  "Unauthorized Action", 
                success : false 
            })
        }
    }catch (error ) {

    }



}

export default callWithMehods(['POST'] , handler)