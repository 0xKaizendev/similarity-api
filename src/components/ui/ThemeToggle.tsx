'use client'
import { useTheme } from 'next-themes';
import {FC} from 'react';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenu  } from './DropdownMenu';
import Button from './Button';
import { Sun, Moon, Laptop } from 'lucide-react';
interface ThemeToggleProps  {
  
};

const ThemeToggle:FC<ThemeToggleProps> = ({}) => {
    const {setTheme} = useTheme()
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild >
           <Button variant='ghost' size='sm'>
                <Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100'></Sun>
                <Moon className='absolute rotate-90 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100'></Moon>

                <span className='sr-only'>Toogle theme </span>
           </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' forceMount>
          <DropdownMenuItem onClick={() => {
            setTheme('light')

          }}>
              <Sun className='mr-2 h-4 w-4 '></Sun>
              <span>Light Theme </span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => {
            setTheme('dark')
          }}>
             <Moon className='mr-2 h-4 w-4'>
             </Moon>
             <span>Dark Theme </span>
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => {
            setTheme('system')
          }}>
             <Laptop className='mr-2 h-4 w-4'>
             </Laptop>
             <span>System Theme </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    
  );
};

export default ThemeToggle;