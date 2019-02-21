import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import styles from './PhotoAlbum.css';


function PhotoAlbum({ photos }) {
  return (
    <div className= {styles.photoAlbum}>
      <h1>Photos of Noodles</h1>
      <Photos photos={photos} />
    </div>
  );
}
PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
