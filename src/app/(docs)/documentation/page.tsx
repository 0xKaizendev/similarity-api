import { FC } from "react"

import type { Metadata } from "next";
import Heading from '@/ui/Heading'
import Paragraph from "@/components/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";

export const metadata : Metadata = {
    title :  'Similarity-API | Documentation ', 
    description: 'Similarity API'
}

 
const page : FC = () => {
    return ( 
        <div className="container  max-w-7xl mx-auto mt-12 ">
               <div className="flex  justify-center fex-col items-center gap-6 mt-12">
                    <Heading> Documentation Page</Heading>
                </div> 
                <div className="mt-4 justify-center flex">
                 <Paragraph> Our API integration right here to check plagarism percent between your texts </Paragraph>
                </div>

                <DocumentationTabs/>
             
        </div>
     );
}
 
export default page 