import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css';

function Photo({ dog }) {
  return (
    <img src={ dog } className={styles.img}/>
  );
}

Photo.propTypes = {
  dog: PropTypes.string.isRequired
};


export default Photo;
