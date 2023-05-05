import styles from './Nav.module.css';
import React from 'react';
import Link from 'next/link';

export default function Nav() {
    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navLinks}>
               <li className={styles.navLink} ><Link className={styles.navLink} href="/">←Home</Link></li>
               <li className={styles.navLink} ><Link className={styles.navLink} href="/interests">←Interest</Link></li>
               <li className={styles.navLink} ><Link className={styles.navLink} href="/resume">←Resume</Link></li>
            </ul>
        </nav>
    );
}