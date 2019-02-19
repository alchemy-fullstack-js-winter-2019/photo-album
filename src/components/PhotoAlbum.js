import React from 'react';
import Photos from './Photos';
// import Photo from './Photo';
import PropTypes from 'prop-types';

// PhotoAlbum component should take a 
// title and an array of urls. It should 
// display the title of the album and 
// the array of urls using the Photos component

function PhotoAlbum({ title, urls }) {
  // const photo1 = '/src/assets/ms20.jpg';
  // const photo2 = '/src/assets/kitten.jpg';
  // const photo3 = '/src/assets/roland_juno6.jpg';
  // const photos = [photo1, photo2, photo3];
  return (
    <>
      <h1>{title}</h1>
      <Photos urls={urls}/>
    </>
  );
}

PhotoAlbum.proptypes = {
  title: PropTypes.string.isRequired,
  urls: PropTypes.array.isRequired
};

export default PhotoAlbum;
