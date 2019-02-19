import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css';

function Photo({ url }) {
  return (
    <li className={styles.photo}>
      <img src={url} />
    </li>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};


export default Photo;
