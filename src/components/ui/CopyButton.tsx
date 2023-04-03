import {ButtonHTMLAttributes, FC, } from 'react';
import Button from '@/components/ui/Button';
import { toast } from './Toast';
import { classNameOptimization } from '@/libs/utils';
import { Copy } from 'lucide-react';

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  generatedKey:string 
};

const CopyButton:FC<CopyButtonProps> = ({ className,generatedKey,...props }) => {
  return (
   <Button {...props} onClick={()=>{
    navigator.clipboard.writeText(generatedKey)
    toast({
      title:'Copied!',
      message:"API key copied",
      type:'success'
    })
   }} variant='ghost' className={classNameOptimization(className)}>
    <Copy className='h-5 w-5'/>
   </Button>
  );
};

export default CopyButton;