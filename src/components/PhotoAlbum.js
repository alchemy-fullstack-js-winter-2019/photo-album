import React from 'react';
import Photos from './Photos';

// PhotoAlbum component should take a 
// title and an array of urls. It should 
// display the title of the album and 
// the array of urls using the Photos component

function PhotoAlbum({ title, urls }) {
  const photo1 = '/src/assets/ms20.jpg';
  const photo2 = '/src/assets/kitten.jpg';
  const photo3 = '/src/assets/roland_juno6.jpg';
  const photos = [photo1, photo2, photo3];
  return (
    <>
    <h1 title={title}>Synthesizers</h1>,
    <Photos urls={photos}/>
    </>
  );
}


export default PhotoAlbum;
