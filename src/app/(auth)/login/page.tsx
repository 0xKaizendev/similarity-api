
import {FC} from 'react'
import Link from 'next/link';
import { Variants } from '@/components/ui/Button';
 import Icons from '@/components/Icons';
 import Heading from '@/components/ui/Heading';
import Paragraph from '@/components/ui/Paragraph';
import UserAuthForm from '@/components/userAuthForm';
const Login: FC = () => {
    return (  
        <div className='absolute inset-0 mx-auto flex h-screen flex-col items-center justify-center'>
            <div className="mex-auto flex w-full gap-6 flex-col justify-center space-y-6">
                <div className='flex flex-col items-center gap-6 text-center'>
                    <Link className={Variants({
                        variant : 'ghost', 
                        className: 'w-fit'
                    })} href='/'>
                        <Icons.ChevronLeft className='mr-2 w-4 h-4'/> Back to Home Page 
                    </Link>

                    <Heading>
                        Welcome Back ! 
                    </Heading>
                    <Paragraph>
                        Please sign in using your google account.  
                    </Paragraph>

                    <UserAuthForm />

                </div>
            </div>
        </div>
    );
}
 
export default Login;