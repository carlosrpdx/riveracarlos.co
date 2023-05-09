import styles from './layout.module.css';
import Footer from './Footer';
import Nav from './Nav';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const initialOpacity = 0.04;
  const maxOpacity = 0.4;
  const minOpacity = 0;
  const fadeStart = viewportHeight / 10;
  const fadeEnd = viewportHeight;

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.pageYOffset);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const opacity = Math.max(
    minOpacity,
    initialOpacity + (maxOpacity - initialOpacity) * (1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart))
  );

  return (
    <div className={styles.layoutContainer}>
      <Nav />
      <Image
        className={styles.background}
        src="/portland.jpeg"
        alt="LinkedIn Logo"
        width={1280}
        height={800}
        style={{ opacity }}
      />
      {children}
      <Footer />
    </div>
  );
}
