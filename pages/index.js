import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import DefaultLayout from '../layouts/DefaultLayout'
import Firestore from '../lib/Firestore'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Just Quotes</title>
        <meta name="description" content="just Quotes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.title}>
    <h1 className={styles.h1}>
      Just Quotes Not AnyThing More Than That!
    </h1>
   </div>
    <div className={styles.box}>
    <Firestore/>
    </div>
    </div>
  )
}
