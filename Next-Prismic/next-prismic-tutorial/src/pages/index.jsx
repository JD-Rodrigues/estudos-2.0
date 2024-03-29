import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from 'src/styles/Home.module.css'
import { getPages } from '../services/clientPrismic'
import Card from 'src/components/card'


 
export const getStaticProps = async () => {
  const pages = await getPages()
  
  return {
    props: {
      pages
    }
  }
}  

export default function Home({pages}) {
  // console.log(pages)
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main>
        {pages.map(page=>
        <li className='item' key={page.id}> 
          <Card 
          image={page.data.gallery_image.url}
          title={page.data.title}
          price={page.data.price}
        />
        </li>)
        }
      </main>
    </>
  )
}
