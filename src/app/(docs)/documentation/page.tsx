import { FC } from "react"

import type { Metadata } from "next";
import Heading from '@/ui/Heading'

export const metadata : Metadata = {
    title :  'Similarity-API | Documentation ', 
    description: 'Similarity API'
}

 
const page : FC = () => {
    return ( 
        <div className="container max-w-7xl mx-auto mt-12 ">
               <div className="flex fex-col items-center gap-6 mt-12">
                    <Heading> Documentation Page</Heading>
                </div> 
        </div>
     );
}
 
export default page 