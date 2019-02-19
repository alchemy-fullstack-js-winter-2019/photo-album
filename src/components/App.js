import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import 'normalize.css';

function App() {
  const photoURL = ['../assets/photo1.jpg', '../assets/photo2.jpg'];

  return (
    <>
      <Header/>
      <PhotoAlbum title='Dogs' url={photoURL}/>
      <Footer />
    </>
  );
}

export default App;
