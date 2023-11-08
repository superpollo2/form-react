import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  
  return (
    <main
      className='flex items-center justify-center text-zinc-800 w-screen bg-zinc-50 h-screen '
    >
      <span>Práctica Comunicaciones II</span>
    </main>
  )
}
