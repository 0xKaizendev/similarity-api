'use client'
import { FC, useState } from 'react';
import Button from '@/ui/Button';
import { signOut } from 'next-auth/react';
import {toast} from '@/components/ui/Toast';

interface SignOutButtonProps {

};

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const signUserOut = async () => { 
        try {
            await signOut()
        } catch (error) {
            toast({
                 title:'Error signing out',
                 message:'Try again',
                 type:'error'
             })
        }
    }
    return <Button onClick={signUserOut} isLoading={isLoading}  >
        Sign out
    </Button>
};

export default SignOutButton;