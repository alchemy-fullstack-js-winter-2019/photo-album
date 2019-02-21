import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Photo.css';

function Photo({ url }) {
  return (
    <div className={styles.image}>
      <img className={styles.image} src={url}/>
    </div>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
