import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import images from '../assets/images';
import 'normalize.css';

function App() {
  return (
    <>
      <Header />
      <PhotoAlbum
        title='Happy Ones'
        urls={images}
      />
      <Footer />
    </>
  );
}

export default App;
