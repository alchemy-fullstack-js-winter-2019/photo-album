import React from 'react';
import styles from './Footer.css';

function Footer() {
    const siteFooter = 'LANCE MERRILL';
    return (
        <footer className={styles.footer}>{siteFooter}</footer>
    );
}
export default Footer;