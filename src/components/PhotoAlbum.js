import React from 'react';
import Photos from './Photos';
import 'normalize.css';
import propTypes from 'prop-types';

function PhotoAlbum({ title }) { 
  return (
    <div>
      <h3> {title} </h3>
      <Photos />
    </div>
  );
}

PhotoAlbum.propTypes = {
  title: propTypes.string.isRequired
};

export default PhotoAlbum;
