import { useEffect, useRef } from 'react';
import styles from './layout.module.css';
import Footer from './Footer';
import Nav from './Nav';

export default function Layout({ children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => {
      if (videoRef.current) {
        window.sessionStorage.setItem('videoTime', videoRef.current.currentTime);
      }
    };

    const savedVideoTime = parseFloat(window.sessionStorage.getItem('videoTime')) || 0;
    if (videoRef.current) {
      videoRef.current.currentTime = savedVideoTime;
    }

    window.addEventListener('beforeunload', handleRouteChange);
    return () => {
      window.removeEventListener('beforeunload', handleRouteChange);
    };
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <Nav />
      <div className={styles.layoutHeader}>
        <video ref={videoRef} autoPlay muted loop className={styles.video}>
          <source src="/vinyl.mp4" type="video/mp4" />
        </video>
      </div>
      {children}
      <Footer />
    </div>
  );
}
