import Head from 'next/head';
import styles from '../styles/Home.module.css';
import UI from '../styles/UI.module.css';
import Link from 'next/link';
import Layout from '../components/layout';
import Image from 'next/image';

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
            <h2>Resume &rarr;<Image className={styles.icon} src="/resume.svg" alt="Resume Logo" width={82} height={26} /></h2>
            <p>
              A comprehensive overview of education, work history, achievements, and skills. 
            </p>
          </Link>
          <Link href="interests" className={UI.card}>
            <h2>Interests &rarr;<Image className={styles.icon} src="/happy.svg" alt="Happy Logo" width={82} height={26} /></h2>
            <p>A glimpse into my life and personality.
              This is a space of my favortie books, movies, music, and more.</p>
          </Link>
        </div>
    </div>
    </Layout>
    </>
  )
}
