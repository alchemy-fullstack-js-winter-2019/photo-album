import React, { Fragment } from 'react';
import Header from './Header';
// import Photo from './Photo';
// import Dogs from './Dogs';
import Footer from './Footer';
// import Photos from './Photos';
import PhotoAlbum from './PhotoAlbum';

import latte from '../assets/latte.jpeg';
import mocha from '../assets/mocha.jpeg';
import whitechocolatemocha from '../assets/whitechocolatemocha.jpeg';

function App() {
  const urls = [latte, mocha, whitechocolatemocha];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum urls={urls} />
      <Footer />
    </Fragment>
  );
}



export default App;
