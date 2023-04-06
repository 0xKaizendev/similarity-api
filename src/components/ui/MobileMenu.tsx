'use client'
import { FC } from 'react';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenu } from '@/ui/DropdownMenu';
import Button from '@/ui/Button';
import Link from 'next/link';
import { Info, LayoutDashboard, LogOut, LogIn } from 'lucide-react';
import { signOut,signIn } from 'next-auth/react';
// import { signIn } from 'next-auth/react';
import { toast } from './Toast';
interface MobileMenuProps {
    isConnected: boolean
};

const MobileMenu: FC<MobileMenuProps> = ({ isConnected }) => {
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
    const signInWithGoogle = async () => {
        try {   
            await signIn('google')

        } catch (error) {
            toast({
                title: 'Error signing in',
                message: 'Try again',
                type: 'error'
            })
        }
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size='lg'>
                    Menu
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' forceMount>
                <DropdownMenuItem >
                    <LayoutDashboard className='mr-2 h-5 w-5' />
                    <Link href='/dashboard'>Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                    <Info className='mr-2 h-5 w-5' />
                    <Link href='/documentation'>Documentation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem >
                    {isConnected ? (<LogOut className='mr-2 h-5 w-5' />) : (<LogIn className='mr-2 h-5 w-5' />)}
                    {isConnected ? (<Link href='/dashboard' onClick={signUserOut}>Sign Out</Link>) : (<Link href='/login' onClick={signInWithGoogle}>Sign In</Link>)}



                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
};

export default MobileMenu;