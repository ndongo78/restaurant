import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {AiOutlineHome , AiOutlineSetting} from 'react-icons/ai'
import {BiBookReader , BiBookmarkMinus} from 'react-icons/bi'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Food</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.drawer}>
          <div className={styles.drawer_header}>
          <Image src="/images/user.webp" alt="logo" width="100" height="100" />
            <p className={styles.drawer_header_text}> John Doe </p>
          </div>
          <div className={styles.drawer_body}>
            <div className={styles.drawer_body_item}>
              <div className={styles.icon}>
                <AiOutlineHome />
              </div>
            <Link href="/">
              <a className={styles.drawer_link}>Accueil</a>
            </Link>
            </div>

            <div className={styles.drawer_body_item}>
              <div className={styles.icon}>
                <BiBookReader />
              </div>
            <Link href="/">
              <a className={styles.drawer_link}>Menu</a>
            </Link>
            </div>
              
            <div className={styles.drawer_body_item}>
              <div className={styles.icon}>
                <BiBookmarkMinus />
              </div>
            <Link href="/">
              <a className={styles.drawer_link}>Articles</a>
            </Link>
            </div>
            
            <div className={styles.drawer_body_item}>
              <div className={styles.icon}>
                <AiOutlineSetting />
              </div>
            <Link href="/">
              <a className={styles.drawer_link}>Paramétre</a>
            </Link>
            </div>
            </div>
        </div>
        <div className={styles.content}>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
