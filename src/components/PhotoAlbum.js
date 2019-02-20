import React from 'react';
import PropTypes from 'prop-types';
// import Photos from './Photos';

function PhotoAlbum({ photos }) {
  return (
    <div>
      <h1>Photo Album</h1>
      {/* <Photos urls={photos}/> */}
    </div>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
