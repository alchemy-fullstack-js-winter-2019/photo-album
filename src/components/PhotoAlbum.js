import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';
import styles from './PhotoAlbum.css';

// PhotoAlbum component should take a 
// title and an array of urls. It should 
// display the title of the album and 
// the array of urls using the Photos component

function PhotoAlbum({ title, urls }) {
  return (
    <>
      <h2 styles={styles.h2}>{title}</h2>
      <Photos urls={urls} styles={styles.img}/>
    </>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired
};

export default PhotoAlbum;
