import React from 'react';
import styles from '../css/Header.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


function Header() {
  return (
    <section>
      <header className={styles.header}>
        <h2> Wanderlust </h2>
      </header>
      <div> 
        <FaGithub id="icon" /> 
        <FaLinkedin id="icon" />
        <FaTwitter id="icon" />
      </div>
    </section>
  );
}

export default Header;
