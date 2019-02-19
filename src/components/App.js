import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import 'normalize.css';

import pet1 from '../assets/IMG_0053.jpg';
import pet2 from '../assets/IMG_0130.jpg';
import pet3 from '../assets/IMG_0188.jpg';
import pet4 from '../assets/IMG_0189.jpg';

const allPets = [pet1, pet2, pet3, pet4];

function App() {
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={allPets} />
      <Footer />
    </Fragment>
  );
}

export default App;
