import styles from './Footer.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.grid}>
                <Link href="https://twitter.com/losrpdx">
                    <Image className={styles.icon} src="/twitter.svg" alt="Twitter Logo" width={92} height={36} />
                </Link>
                <Link href="https://github.com/carlosrpdx">
                    <Image className={styles.icon} src="/github.svg" alt="GitHub Logo" width={92} height={36} />
                </Link>
                <Link href="https://www.linkedin.com/in/carlosrpdx/">
                    <Image className={styles.icon} src="/linkedin.svg" alt="LinkedIn Logo" width={92} height={36} />
                </Link>
            </div>
        </footer>
    );
}