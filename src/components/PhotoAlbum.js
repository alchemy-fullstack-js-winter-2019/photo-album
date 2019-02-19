import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import styles from './Main.css';

function PhotoAlbum({ urls }) {
  
  return (
    <ul className={styles.list}>
      <Photos />
    </ul>
  );
}

PhotoAlbum.propTypes = {
  urls: PropTypes.array.isRequired
};

export default PhotoAlbum;

