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
        <div className="heading__row">
          <div className="first__two__thirds">
          <div className="header__subtitle__container">
            <h1>Invoices</h1>
            <p>There are 4 pending invoices</p>
          </div>
          </div>
          <div className='last__third'>
          <div className="filter">
            <h2>Filter by status</h2>
            <p>X</p>
          </div>
          <div className="new__invoice__button">
            <h1>Invoice button</h1>
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
