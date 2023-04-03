'use client'
import { createKey } from '@/libs/utils';
import { FC, FormEvent, useState } from 'react';
import { toast } from '@/ui/Toast';
import { Key } from 'lucide-react';
import Heading from '@/ui/Heading';
import Paragraph from '@/ui/Paragraph';
import CopyButton from '@/ui/CopyButton';
import { Input } from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const RequestApiKey: FC = ({ }) => {
    const [isCreating, setIsCreating] = useState<boolean>(false)
    const [apiKey, setApiKey] = useState<string | null>(null)
    const createApiKey = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsCreating(true)
        try {
            const newApiKey = await createKey()
            setApiKey(newApiKey)
        } catch (error) {
            if (error instanceof Error) {
                toast({
                    title: 'Error generating key',
                    message: error.message,
                    type: 'error'
                })
                return
            }
            toast({
                title: 'Error ',
                message: "Something went wrong",
                type: 'error'
            })
        } finally{
            setIsCreating(false)
        }   
    }
    return (
        <div className='container md:max-w-2xl'>
            <div className="flex flex-col gap-6 items-center">
                <Key className='max-auto h-12 w-12 text-gray-400'/>
                <Heading>
                   Create new secret key 
                </Heading>
                <Paragraph>
                    You have no key generated
                </Paragraph>
            </div>
            <form onSubmit={createApiKey} className='mt-8 sm:items-center sm:flex'>
                    <div className='relative rounded-md shadow-md sm:min-w-0 sm:flex-1 '>
                    {
                        apiKey?(<CopyButton generatedKey={apiKey} type='button' className='absolute inset-y-0 right-0 animate-in fade-in duration-700'/> ):null
                    }
                    <Input readOnly value={apiKey??""} placeholder='Request your key'/>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:flex-shrink-0 sm:ml-4 flex justify-center">
                        <Button disabled={!!apiKey} isLoading={isCreating}>
                            Request key
                        </Button>
                    </div>
            </form>
        </div>
    );
};

export default RequestApiKey;