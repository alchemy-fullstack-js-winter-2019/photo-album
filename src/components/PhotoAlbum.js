import React from 'react';
// import styles from './List.css';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ dogs, albumName }) {
  return (
    <>
      <h2>{albumName}</h2>
      <Photos dogs={ dogs }/>
    </>
  );
}

PhotoAlbum.propTypes = {
  dogs: PropTypes.array.isRequired,
  albumName: PropTypes.string.isRequired
};


export default PhotoAlbum;
