import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import styles from '../css/PhotoAlbum.css';

function PhotoAlbum({ photos }) {
  return (
    <div className={styles.album}>
      <h2>Photo Album</h2>
      <Photos urls={photos} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
