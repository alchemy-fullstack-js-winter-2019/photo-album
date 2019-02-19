import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';

function PhotoAlbum({ title, photos }) {
  

  return (
    <div>
      <h1>{title}</h1>
      <Photos photos={photos}/>
    </div>
  );
}
PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
