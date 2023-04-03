import { FC } from "react";
 import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/auth";
import { notFound } from "next/navigation";
import { db } from "@/libs/db";
import ApiDashboard from "@/components/ui/ApiDashboard";
import RequestApiKey from "@/components/ui/RequestApiKey";
 export const metadata:Metadata={
    title:'Similarity API | Dashboard',
    description:'Similarity API'
 }
const Dashboard =async () => {
    const session = await getServerSession(authOptions)
    if(!session ) return notFound()
    const apiKey = await db.apiKey.findFirst({
        where :{userId:session.user.id,enabled:true}
    })
    return ( 
        <div className="max-w-7xl mx-auto mt-15">
           {apiKey? <ApiDashboard/>:<RequestApiKey/> }
        </div> 
     );
}
 
export default Dashboard;