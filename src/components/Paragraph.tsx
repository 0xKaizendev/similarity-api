import { FC, HTMLAttributes } from 'react';
import { cva, VariantProps } from "class-variance-authority";

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
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>,VariantProps<typeof Variants>{

};
const Paragraph: FC<ParagraphProps> = ({ }) => {
    return (
        <div>
            ParagraphProps
        </div>
    );
};

export default Paragraph;