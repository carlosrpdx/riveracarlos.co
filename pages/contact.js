import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
      <h3>Email</h3>
      <p>riveracarlos.co@gmail.com</p>
      
      <h3>Phone</h3>
      <p>503-997-8492</p>
      
      <h3>Twitter</h3>
      <a href="https://twitter.com/losrpdx">Link</a>
    </Layout>
  );
}