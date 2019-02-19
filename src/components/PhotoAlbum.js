import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, urls }) {
  return (
    <>
      <h2>Album: {title}</h2>
      <Photos urls={urls} />
    </>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired
};

export default PhotoAlbum;
