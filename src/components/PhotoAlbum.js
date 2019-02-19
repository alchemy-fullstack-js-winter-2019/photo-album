import React from 'react';
// import styles from './List.css';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ dogs }) {
  
  return (
    <>
      <Photos dogs={ dogs }/>
    </>
  );
}

PhotoAlbum.propTypes = {
  dogs: PropTypes.array.isRequired
};


export default PhotoAlbum;
