import React from 'react';
import styles from '../css/Footer.css';
import me from '../assets/me.png';

function Footer() {
  return (
    <footer className={styles.footer}>
        © 2019 | Paige E. Gorry
      <img src={me} />
    </footer>
  );
}

export default Footer;
