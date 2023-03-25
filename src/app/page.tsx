import { Inter } from 'next/font/google'
import Paragraph from '@/components/ui/Paragraph'
import Heading from '@/components/ui/Heading'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Paragraph size="default">Hello</Paragraph>
      <Heading size='sm'>
        H1 Element
      </Heading>
    </main>
  )
}
