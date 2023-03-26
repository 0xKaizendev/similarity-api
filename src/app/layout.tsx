import { classNameOptimization } from '@/libs/utils/utils'
import '@/styles/globals.css'
import Providers from '@/components/ui/Providers'
import { Inter } from 'next/font/google'
import Navbar from '@/components/ui/Navbar'
const inter = Inter({subsets:['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={classNameOptimization('bg-white text-slate-900 antialiased',inter.className)}>
      <body className='min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'>
        <Providers>
       {/* @ts-expect-error Server Component */}
        <Navbar/>
        <main>{children}</main>
        </Providers>
        <div className='h-40 md:hidden'/>
        </body>
    </html>
  )
}
