import React from 'react';
import styles from '../css/Header.css';
import logo from '../assets/large.png';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <h1>Awesome amazing super site</h1>
    </header>
  );
}

export default Header;
