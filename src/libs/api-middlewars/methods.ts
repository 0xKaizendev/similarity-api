import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";


export default function callWithMehods(methods : string[] , handler : NextApiHandler) {

    return async function (req : NextApiRequest , res: NextApiResponse) {
        if(!req.method || !methods.includes(req.method) )
        {
            return res.status(405).end() 
        }

        return handler(req, res)
    }
}