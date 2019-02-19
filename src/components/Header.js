import React from 'react';
import styles from '../css/Header.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';


function Header() {
  return (
    <section>
      <header className={styles.header}>
        <h1> Wanderlust </h1>
        <div className={styles.div}> 
          <FaGithub id="icon" className="icon"/>
          <FaLinkedin id="icon" className="icon" /> 
          <FaTwitter id="icon"  className="icon"/>
        </div>
      </header>
    </section>
  );
}

export default Header;
