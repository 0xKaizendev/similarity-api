
import { FC } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/Tabs";
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

                <TabsContent value='nodejs'>

                </TabsContent>

                <TabsContent value='python'>
                    
                </TabsContent>
            </TabsList>
        </Tabs>
     );
}
 
export default DocumentationTabs;