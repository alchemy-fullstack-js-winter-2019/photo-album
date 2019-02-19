import React from 'react';
import 'normalize.css';

function Photo(){
  return (
    <li>
      <img src = {city} />
    </li>
  );
}

////////////////////
function App() {
  const photos = [tree1, tree2];
  return (
    <PhotoAlbum title="Cities" photos={photos} />
  );
}

function PhotoAlbum({ title, photos }) {
  return (
   <>
    <h2>{title}</h2>
    <Photos photos={photos} />
   </>
  )
}

function Photo({ photos }) {
  photos.map(photo => {
    return <Photo
  })
}
