import '@/styles/globals.css'
export default function RootLayout({children} : {
    children : React.ReactNode
}) {
  return (
    
    <div className="pt-22">
        {children}
    </div>

  )
}
