import React from 'react';
import styles from './Header.css';
import logo from '../assets/logo.jpg';

function Header() {
  return (
    <header className={styles.header}>
    <h1>This is a site for the cutest dogs</h1>
    <img src={logo} />
    </header>
  )
};

export default Header;