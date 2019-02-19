import React from 'react';
import styles from './Header.css';
import logo from '../assets/dogbone.png';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Dogs for Days</h1>
    </header>
  );
}

export default Header;
