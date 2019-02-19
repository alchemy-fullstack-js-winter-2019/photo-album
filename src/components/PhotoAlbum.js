import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';

function PhotoAlbum({ photos }) {
  return (
    <div>
      <h1>Pet Portraits</h1>
      <Photos urls={photos} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;

