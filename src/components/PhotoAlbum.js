import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';


function PhotoAlbum({ urls }) {

  return (
    <div>
      <h1>PhotoAlbum</h1>
      <Photos urls={urls} />
    </div>
  );
}

PhotoAlbum.propTypes = {
  urls:PropTypes.array.isRequired
};

export default PhotoAlbum;

