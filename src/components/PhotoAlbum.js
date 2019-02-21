import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import styles from '../CSS/PhotoAlbum.css';

function PhotoAlbum({ photos }) {
  return (
    <div>
      <h1 className={styles.title }>
        Oil on Wood Panels
      </h1>
      <Photos urls={photos} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;

