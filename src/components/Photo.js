import React from 'react';
import PropTypes from 'prop-types';
// import 'normalize.css';

function Photo({ url }){
  return (
    <img src={url} />
  );
}

Photo.prototype = {
  url: PropTypes.string.isRequired
};

export default Photo;

////////////////////
// function App() {
//   const photos = [tree1, tree2];
//   return (
//     <PhotoAlbum title="Cities" photos={photos} />
//   );
// }

// function PhotoAlbum({ title, photos }) {
//   return (
//    <>
//     <h2>{title}</h2>
//     <Photos photos={photos} />
//    </>
//   )
// }

// function Photo({ photos }) {
//   photos.map(photo => {
//     return <Photo
//   })
// }
