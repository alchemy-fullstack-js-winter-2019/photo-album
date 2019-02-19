import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import 'normalize.css';
import bulldog1 from '../assets/photo1.jpg';
import bulldog2 from '../assets/photo2.jpg';

function App() {
  const photoURL = [bulldog1, bulldog2];

  return (
    <>
      <Header/>
      <PhotoAlbum title='Dogs' url={photoURL}/>
      <Footer />
    </>
  );
}

export default App;
