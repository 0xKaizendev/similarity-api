'use client'

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/DropdownMenu";
import { toast } from "./ui/Toast";

interface ApiKeyOptionsProps {
    apiKeyId : string, 
    apiKeyKey : string 
}
 
const ApiKeyOptions : FC<ApiKeyOptionsProps> = ({ apiKeyId, apiKeyKey } ) => {

    const [isCreatingNew, setIsCreatingNew] = useState<boolean>(false)
    const [isRevoking, setIsRevoking] = useState<boolean>(false) ; 
    const router = useRouter() ; 
    // create New Api Key 

    const createNewApiKey = async () => {
        setIsCreatingNew(true) ; 

        try {
            await revokeApiKey({keyId : apiKeyId})
            await createApiKey() 
            router.refresh()

        } catch (error) {
            toast({
                title : "Error creating API Key" , 
                message:  "Please try again later ",
                type: "error"
            })
        } finally {
            setIsCreatingNew(false);
        }
    }


    return (
        <DropdownMenu>
            <DropdownMenuTrigger  disabled={isCreatingNew || isRevoking} asChild>
                <Button variant='ghost' className="flex gap-2 items-center">
                    <p>
                        {
                            isCreatingNew ? 
                            'Creating new Key'
                            : isRevoking ? 
                            "Revoking key" : "Options"
                        }

                        {isCreatingNew || isRevoking ? (
                            <Loader2 className="animate-spin h-4 w-4" />
                        ) : null}
                    </p>

                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => {
                    navigator.clipboard.writeText(apiKeyKey)

                    toast({
                        title : 'Copied' , 
                        message : "API Key Copied to clipboard", 
                        type: "success"
                    })
                }}>
                    Copy
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Create new Key
                </DropdownMenuItem>
                <DropdownMenuItem>
                     Revoke Key
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
 
export default ApiKeyOptions ;