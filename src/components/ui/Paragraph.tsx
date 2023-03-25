import React,{ FC, HTMLAttributes,forwardRef } from 'react';
import { cva, VariantProps } from "class-variance-authority";
import { classNameOptimization } from '@/libs/utils/utils';
// Cree des variants de paragraphes avec un default
const Variants = cva("max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center", {
    variants: {
        size: {
            default: 'text-base sm:text-lg',
            sm: 'text-sm sm:text-base',
        }
    },
    defaultVariants: {
        size: 'default'
    }
})
// Interface ParagraphProps pour definir le type de donnees que recevra le composant, il herite des attributs d'un paragraphe en HTML et des Variants
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>,VariantProps<typeof Variants>{

};
// 
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, size, children, ...props }, ref) => {
      return (
        <p
          ref={ref}
          {...props}
          className={classNameOptimization(Variants({ size, className }))}>
          {children}
        </p>
      )
    }
  )
  
  Paragraph.displayName = 'Paragraph'
  
  export default Paragraph