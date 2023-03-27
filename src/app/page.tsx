import Heading from '@/components/ui/Heading'
import Paragraph from '@/components/ui/Paragraph'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Free & Open-source text similarity API"
}
export default function Home() {
  return (
    <main className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <Heading
            size='lg'
            className='three-d text-black dark:text-light-gold'>
           Determine similarity <br /> between two text
          </Heading>

          <Paragraph className='max-w-xl lg:text-left'>
             Generate <Link className='underline underline-offset-2 text-black dark:text-light-gold ' href='/login'>
              api key</Link> your  and determine similarity between two pieces of text with our free API.
          </Paragraph>

          <div className='relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={100}
              style={{ objectFit: 'contain' }}
              fill
              src='/assets/typewriter.png'
              alt='typewriter'
            />
          </div>
        </div>
      </div>
    </main>
  )
}
