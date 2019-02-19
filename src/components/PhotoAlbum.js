import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import styles from './PhotoAlbum.css';


function PhotoAlbum({ urls }) {

  return (
    <div className={styles.div}>
      <h1 >PhotoAlbum</h1>
      <Photos urls={urls} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  urls:PropTypes.array.isRequired
};

export default PhotoAlbum;

