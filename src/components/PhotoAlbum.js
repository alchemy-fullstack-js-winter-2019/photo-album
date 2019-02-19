import React from 'react';
import PropTypes from 'prop-types';
import styles from './photoAlbum.css';
import Photos from './Photos';


function PhotoAlbum({ title,  url }) {
  return (
    <main className={styles.photoAlbum}>
      <h1>{ title }</h1>
      <Photos url={ url } />
    </main>
  );

}

PhotoAlbum.propTypes = {
  url: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default PhotoAlbum;
