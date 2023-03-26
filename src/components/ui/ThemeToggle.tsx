import { useTheme } from 'next-themes';
import {FC} from 'react';

interface ThemeToggleProps  {
  
};

const ThemeToggle:FC<ThemeToggleProps> = ({}) => {
    const {setTheme} = useTheme()
  return (
    <div>
      ThemeToggleProps
    </div>
  );
};

export default ThemeToggle;