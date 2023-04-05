'use client'
import createApiKey from "@/helpers/create-api-key";
import revokeApiKey from "@/helpers/revoke-api-key";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import Button from "./ui/Button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/DropdownMenu";
import { toast } from "./ui/Toast";
import Swal from  'sweetalert2'
import withReactContent from "sweetalert2-react-content";

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

    // revoke current API Key 


    const  allowRevokingAction = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'bg-red-400 text-white text-center px-4 font-semibold py-2 rounded-lg ml-4',
              cancelButton: 'bg-blue-500 text-white px-4 py-2 font-semibold text-center rounded-lg'
            },
            buttonsStyling: false
          })
      
          swalWithBootstrapButtons.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true
                }).then((result) => {
                if (result.isConfirmed) {
                    revokeCurrentApiKey()
                    setTimeout(() => {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your API has been revoked.',
                            'success'
                        )
                    }, 2500);
                   
                  
                    
                } else if ( result.dismiss === Swal.DismissReason.cancel) 
                {
                    swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'You have  cancelled revoking Action  :)',
                    'info'
                    )
                }
          })

    }

    const revokeCurrentApiKey = async () => {
        setIsRevoking(true) 

        try {
            await revokeApiKey({keyId : apiKeyId})
            router.refresh()

        } catch (error) {
            toast({
                title : "Error occurs while revoking API Key" , 
                message:  "Please try again later ",
                type: "error"
            })
        } finally {
            setIsRevoking(false);
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
                <DropdownMenuItem onClick={createNewApiKey}>
                    Create new Key
                </DropdownMenuItem>
                <DropdownMenuItem onClick={allowRevokingAction}>
                     Revoke Key
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
 
export default ApiKeyOptions ;