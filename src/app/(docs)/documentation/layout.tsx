
export default function Layout({  children } : {
    children : React.ReactNode
}) {
  return (
    <section className="pt-12">
        {children}
    </section>
  )
}
