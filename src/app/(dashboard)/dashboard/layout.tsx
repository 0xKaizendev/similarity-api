import '@/styles/globals.css'

export default function RootLayout  ({children } : {children : React.ReactNode}) 
{
    return ( 
        <section className="pt-24">
            {children}
        </section>
     );
}
 
