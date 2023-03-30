import {FC, HTMLAttributes,forwardRef} from 'react';
import { cva, VariantProps } from "class-variance-authority";
import { classNameOptimization } from '@/libs/utils';

// Differents Variant de paragraph selon la taille de l'ecran
const Variants = cva("dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter", {
    variants: {
        size: {
            default: 'text-4xl md:text-5xl lg:text-6xl',
            lg: 'text-5xl md:text-6xl lg:text-7 xl',
            sm: 'text-sm sm:text-base',
        }
    },
    defaultVariants: {
        size: 'default'
    } 
})
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement>,VariantProps <typeof Variants> {
  
};
const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, size, children, ...props }, ref) => {
      return (
        <h1
          ref={ref}
          {...props}
          className={classNameOptimization(Variants({ size, className }))}>
          {children}
        </h1>
      )
    }
  )
  
  Heading.displayName = 'Paragraph'
  
  export default Heading