import React from 'react';
import Photos from './Photos';
import styles from '../css/PhotoAlbum.css';
import PropTypes from 'prop-types';

function PhotoAlbum({ photos }) {
  return (
    <main className={styles.main}>
      <h2>planetz</h2>
      <p>(psst hover over a planet!)</p>
      <Photos urls={photos}/>
    </main>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
