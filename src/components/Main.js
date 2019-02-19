import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';

function PhotoAlbum({ photos }) {
  
  return (
    <ul className={styles.list}>
    </ul>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;

