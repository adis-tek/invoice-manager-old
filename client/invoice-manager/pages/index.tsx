import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Invoice App</title>
        <meta name="description" content="Your personal invoice app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.headingRow}>
          <div className={styles.firstTwoThirds}>
          <div className={styles.headerSubtitleContainer}>
            <h1>Invoices</h1>
            <p>There are 4 pending invoices</p>
          </div>
          </div>
          <div className={styles.lastThird}>
          <div className={styles.filter}>
            <h3>Filter by status</h3>
            <p>X</p>
          </div>
          <div className={styles.newInvoiceButton}>
            <p>Invoice button</p>
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
