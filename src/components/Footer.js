import React from 'react';
import styles from './Footer.css';
import me from '../assets/me.jpg';
import PropTypes from 'prop-types';

function Footer({ name }) {
  return (
    <footer className={styles.footer}>
      <p>{name}</p>
      <img src={me}/>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired
};
export default Footer;
