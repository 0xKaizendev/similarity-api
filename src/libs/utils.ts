import clsx, { ClassValue } from "clsx";
import { twMerge} from 'tailwind-merge'
export const  classNameOptimization= (...inputs:ClassValue[])=>{
    return twMerge(clsx(inputs))
}