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
import pluto from '../assets/pluto.png';

function App() {
  const planets = [mercury, neptune, uranus, venus, pluto, jupiter];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={planets}/>
      <Footer />
    </Fragment>
  );
}

export default App;
