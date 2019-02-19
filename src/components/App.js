import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';
import 'normalize.css';
import jupiter from '../assets/jupiter.jpg';
import mercury from '../assets/mercury.jpg';
import neptune from '../assets/neptune.jpg';
import uranus from '../assets/uranus.jpg';
import venus from '../assets/venus.jpg';

function App() {
  const planets = [jupiter, mercury, neptune, uranus, venus];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={planets}/>
      <Footer />
    </Fragment>
  );
}

export default App;
