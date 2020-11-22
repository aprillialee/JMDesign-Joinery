import Head from 'next/head'
import styles from '../styles/Home.module.css'

import HomePage from "../components/homepage/Homepage"


export default function Home() {
  return (
    <>
      <Head>
        <title>JM Design &#38; Joinery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </>
  )
}
