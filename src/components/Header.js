import React from 'react';
import styles from './Header.css';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <h1>Teonnas Dogs</h1>
    </header>
  );
}

export default Header;
