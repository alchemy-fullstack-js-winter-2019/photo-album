import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';

function PhotoAlbum({ title, photos }) {
  return (
    <main>
      <h2>Michael Elliott Photography</h2>
      <h3>{title}</h3>
      <Photos urls={photos}/>
    </main>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
