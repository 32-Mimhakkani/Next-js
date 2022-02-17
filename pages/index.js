import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'


export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.container}>
      <Head>
        <title>Wellcome To Nextjs</title>
        <meta name="description" content="this is my first content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   
    <h1>Hellow Nextjs in  first tutirial</h1> 

    <Link href='/About'>
      <a>About </a>
    </Link>


    <Link href='/profile'>
      <a>Profile </a>
    </Link>

    <Link href='/Blog' replace>
      <a>Blog </a>
    </Link>


    <Link href='/Products'>
      <a>Products </a>
    </Link>


    <Link href='/Posts/'>
      <a>Post </a>
    </Link>
    
    <button onClick={()=>router.push('/Blog/first')}>Blog first page </button>
      
      
      


    </div>
  )
}
