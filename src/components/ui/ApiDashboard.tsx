import { authOptions } from "@/libs/auth";
import { db } from "@/libs/db";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import {formatDistance} from 'date-fns'
import  Heading  from '@/components/ui/Heading';
import Paragraph from "./Paragraph";
import { Input } from "./Input";
import Table from "./Table";
import ApiKeyOptions from "../ApiKeyOptions";

const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions) ; 

  if(!user) {
    return notFound()
  }

  //find all API key for user 

  const apiKeys = await db.apiKey.findMany({
    where: { userId : user.user.id } 
  })

  const  activeKey = apiKeys.find((key) => key.enabled)

  if(!activeKey) 
  return notFound() ; 
 
  const userRequests = await db.apiRequest.findMany({
    where : {
      apiKeyId : {
        in : apiKeys.map((key) => key.id)
      }
    }
  })


  const serializableRequests = userRequests.map((req) => ({
    ...req , 
    timestamp : formatDistance(new Date(req.timestamp) , new Date()), 
  }))
  return (
    <div className="container flex flex-col gap-6 mt-12">
      <Heading>
         Welcome back  { user.user.name }
      </Heading>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center ">
        <Paragraph>Your API key : </Paragraph>
      </div>
      <div className="flex justify-center">
          <Input className=" truncate w-fit" readOnly value={activeKey.key} />
          <ApiKeyOptions apiKeyId={activeKey.id} apiKeyKey={activeKey.key} />
        </div>

        <Paragraph className="text-center md:text-left mt-4 -mb-4">
           Your  API  hystory
        </Paragraph>
        <Table userRequest={serializableRequests}/>
    </div>
  );
};

export default ApiDashboard;