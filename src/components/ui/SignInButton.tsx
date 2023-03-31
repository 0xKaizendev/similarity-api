'use client'
import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signIn } from 'next-auth/react';
import { toast } from '@/components/ui/Toast';

interface SignInButtonProps {

};

const SignInButton: FC<SignInButtonProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const signInWithGoogle = async () => {
        try {   
            setIsLoading(false)
            await signIn('google')

        } catch (error) {
            toast({
                title: 'Error signing in',
                message: 'Try again',
                type: 'error'
            })
        }
    }
    return <Button onClick={signInWithGoogle} isLoading={isLoading}  >
                    Sign in
            </Button>

    
};

export default SignInButton;