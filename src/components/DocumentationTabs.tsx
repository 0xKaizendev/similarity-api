'use client'
import { FC } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/Tabs";
import SimpleBar from 'simplebar-react'
import  Code  from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";
import 'simplebar-react/dist/simplebar.min.css'
interface DocumentationProps {
    
}
 
const DocumentationTabs: FC<DocumentationProps> = () => {
    return ( 
        <Tabs defaultValue="nodejs" className="lax-w-2xl w-full">
            <TabsList>
                <TabsTrigger value="nodejs">
                    Node JS
                </TabsTrigger>
                <TabsTrigger value="python">
                    Python 
                </TabsTrigger>
            </TabsList>

                <TabsContent value='nodejs'>
                    <SimpleBar>
                        <Code language="javascript" code={nodejs} animated={true} animationDelay={200} show />
                    </SimpleBar>

                    
                </TabsContent>

                <TabsContent value='python'>
                    <SimpleBar>
                        <Code language="python" code={python} animated={true} animationDelay={150} show/>
                    </SimpleBar>
                    
                </TabsContent>
           
        </Tabs>
     );
}
 
export default DocumentationTabs;