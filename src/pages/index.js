import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Spotify 2.0</title>
      </Head>


      <h1>This is a dope spotify 2.0 clone</h1>
    </div>
  )
}
