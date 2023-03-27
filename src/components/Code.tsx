'use client'
import { FC, useState, useEffect } from "react";

import  { type Language} from 'prism-react-renderer'
import { useTheme } from "next-themes";

interface CodeProps {
    code : string , 
    show : boolean , 
    language : Language
    animationDelay?: number 
    animated?: boolean
}
 
const Code: FC<CodeProps> = ({code, show, language, animated, animationDelay} : CodeProps) => {

    const {theme: applicationTheme } = useTheme() 
    const [text,  setText] = useState<String>(animated? ''  : code ) ; 

    useEffect(() => {
      if(show && animated) {
        let i = 0 

        setTimeout(() => {
            
        }, animationDelay || 200);
      }
    }, [])
    

    return (  
        <>
        </>
    );
}
 
export default Code;