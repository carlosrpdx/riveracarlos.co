import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carlos Rivera</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/images/profile.jpeg" className={styles.profile}/>
        <p className={styles.description}>
          <strong>Carlos Rivera</strong>
        </p>

        <div className={styles.grid}>
          <a href="resume" className={styles.card}>
            <h3>Resume &rarr;</h3>
            <p>
              A comprehensive overview of education, work history, achievements, and skills. 
            </p>
          </a>

          <a href="interests" className={styles.card}>
            <h3>Interests &rarr;</h3>
            <p>A glimpse into my life and personality.
              This is a space of my favortie books, movies, music, and more.</p>
          </a>
          {/*}
          <a href="projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
           <a href="contact"
            className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>
            Get in touch! Email address, phone number, and links to relevant online profiles. Let's connect!
            </p>
          </a>
        {*/}
        </div>
      </main>
        
      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
