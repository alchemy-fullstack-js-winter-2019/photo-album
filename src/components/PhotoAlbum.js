import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/PhotoAlbum.css';
import Photos from './Photos';

function PhotoAlbum({ photos }) {
  return (
    <div className={styles.album}>
      <h2>Best In Show</h2>
      <Photos urls={photos} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
