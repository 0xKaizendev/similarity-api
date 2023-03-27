'use client'
import { FC, useState, useEffect } from "react";

import  Highlight, { defaultProps, type Language} from 'prism-react-renderer'
import { useTheme } from "next-themes";

import darkTheme from 'prism-react-renderer/themes/nightOwl'
import lightTheme from 'prism-react-renderer/themes/nightOwlLight'

interface CodeProps {
    code : string 
    show : boolean 
    language : Language
    animationDelay?: number 
    animated?: boolean
}
 
const Code: FC<CodeProps> = ({code, show, language, animated, animationDelay} : CodeProps) => {

    const {theme: applicationTheme } = useTheme() 
    const [text,  setText] = useState<string>(animated? ''  : code ) ; 

    useEffect(() => {
      if(show && animated) {
        let i = 0 

        // animation sur le texte  
        /**
         *  Le texte est récupéré de helpers/document-code  puis set lettre par lettre puis affiché pour faire l'animation typed 
         */
        setTimeout(() => {
          const intervalId = setInterval(() => {
            setText(code.slice(0, i))
            i++
            if(i > code.length )
            {
                clearInterval(intervalId) ; 
            }
          }, 20)

          return () => clearInterval(intervalId)

        }, animationDelay || 200);
      }
    }, [code, show, animated, animationDelay])
    

    // get number of line :  reg details : \r\n ou \r ou \n

    const lines  = text.split(/\r\n|\r|\n/).length
    const theme = applicationTheme === 'light' ? lightTheme : darkTheme 

    return (  
      <Highlight {...defaultProps} code={text} language={language} theme={theme}>
        {({ className, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={
              className +
              'transition-all w-fit bg-transparent duration-100 py-0 no-scrollbar'
            }
            style={{
              maxHeight: show ? lines * 24 : 0,
              opacity: show ? 1 : 0,
            }}>
            {tokens.map((line, i) => {
              // eslint-disable-next-line no-unused-vars
              const { key, ...rest } = getLineProps({ line, key: i })
              return (
                <div key={`line-${i}`} style={{ position: 'relative' }} {...rest}>
                  {line.map((token, index) => {
                    // eslint-disable-next-line no-unused-vars
                    const { key, ...props } = getTokenProps({ token, i })
                    return <span key={index} {...props} />
                  })}
                </div>
              )
            })}
          </pre>
        )}
      </Highlight>
    );
}
 
export default Code;