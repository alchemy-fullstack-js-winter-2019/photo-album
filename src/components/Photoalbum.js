import React from 'react';
import Photos from './Photos';
import PropTypes from 'prop-types';

//destructuring is more informative other tthan just leaving 
function PhotoAlbum({ title, url }) {
  return (
    <section>
      <h2>{title}</h2>
      <Photos  url={url} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.array.isRequired
};


export default PhotoAlbum;
