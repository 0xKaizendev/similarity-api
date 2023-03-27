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
    <main className='relative h-screen overflow-x-hidden flex justify-center items-center '>
      <div className="container lg:p-32 px-10 pt-24 text-white  max-w-7xl mx-auto w-full h-full ">
        <div className="h-full flex flex-col gap-6 justify-start lg:justify-center items-center lg:items-start ">
          <Heading size='lg' className='text3d dark:text-light-gold  '>
            Determine similarity <br /> between two text
          </Heading>
          <Paragraph className='max-w-lg lg:text-left '>
            Generate <Link className='underline underline-offset-2 text-black dark:text-light-gold ' href='/login'>
              api key</Link> your  and determine similarity between two pieces of text with our free API.

          </Paragraph>
          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute ">
            <Image priority quality={100} style={{ objectFit: 'contain' }} src='/assets/typewriter.png' alt='typewriter' className='shadow-img' fill />
          </div>
        </div>
      </div>
    </main>
  )
}
