import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <h1>Projects</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </Layout>
  );
}