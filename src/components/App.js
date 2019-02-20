import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
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
