import styles from './layout.module.css';
import Footer from './Footer';
import Nav from './Nav';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const viewportHeight = typeof window !== 'undefined' ? window.innerHeight : 0;
  const fadeStart = viewportHeight / 10;
  const fadeEnd = viewportHeight;
  const initialScrollPosition = typeof window !== 'undefined' ? window.pageYOffset : 0;
  const [scrollPosition, setScrollPosition] = useState(initialScrollPosition);

  const initialOpacity = 0.04;
  const maxOpacity = 0.4;
  const minOpacity = 0;
  const [opacity, setOpacity] = useState(initialOpacity);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      setScrollPosition(currentScrollPosition);

      const newOpacity = Math.max(
        minOpacity,
        maxOpacity - (maxOpacity - minOpacity) * ((currentScrollPosition - fadeStart) / (fadeEnd - fadeStart))
      );
      setOpacity(newOpacity);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Call handleScroll initially to set the correct opacity
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Nav />
      <Image
        className={styles.background}
        src="/portland.jpeg"
        alt="Background Image"
        width={1280}
        height={800}
        style={{ opacity }}
        priority={true}
      />
      {children}
      <Footer />
    </div>
  );
}
