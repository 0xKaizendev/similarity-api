'use client'
import { createKey } from '@/libs/utils';
import { FC, FormEvent, useState } from 'react';
import { toast } from '@/ui/Toast';

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
        <div>
            RequestApiKeyProps
        </div>
    );
};

export default RequestApiKey;