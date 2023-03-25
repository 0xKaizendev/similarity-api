import {FC} from 'react';
import { cva } from 'class-variance-authority';
interface ButtonProps  {
  
};
const Variants = cva('active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus-slate-400 disabled:pointer-event-none dark:focus:ring-offset-slate-900',{
    variants:{
        variant:{
            default:''
        }
    }
})
const Button:FC<ButtonProps> = ({  }) => {
  return (
    <div>
      ButtonProps
    </div>
  );
};

export default Button;