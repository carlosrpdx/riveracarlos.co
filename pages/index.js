import Head from 'next/head';
import styles from '../styles/Home.module.css';
import UI from '../styles/UI.module.css';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <>
    <Layout>
      <Head>
        <title>Carlos Rivera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={UI.container}>
        <h1 className={UI.title}>
          Carlos Rivera
        </h1>
        <div className={UI.grid}>
          <Link href="resume" className={UI.card}>
            <h3>Resume &rarr;</h3>
            <p>
              A comprehensive overview of education, work history, achievements, and skills. 
            </p>
          </Link>
          <Link href="interests" className={UI.card}>
            <h3>Interests &rarr;</h3>
            <p>A glimpse into my life and personality.
              This is a space of my favortie books, movies, music, and more.</p>
          </Link>
        </div>
    </div>
    </Layout>
    </>
  )
}
