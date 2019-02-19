import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';


function PhotoAlbum({ photos }) {
  return (
    <Fragment>
      <h1>Superheroes</h1>
      <Photos urls={photos} />
    </Fragment>
  );
}

PhotoAlbum.propTypes = {
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
