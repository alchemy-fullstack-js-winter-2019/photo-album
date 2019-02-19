import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import batman from '../assets/batman.jpg';
import blackWidow from '../assets/blackwidow.jpg';
import wonderWoman from '../assets/wonderwoman.jpg';
import capAmerica from '../assets/capamerica.jpg';
import superman from '../assets/superman.jpg';
import aquaman from '../assets/aquaman.jpg';
import flash from '../assets/flash.jpg';

import 'normalize-css';

function App() {
  const photos = [batman, blackWidow, wonderWoman, capAmerica, superman, aquaman, flash];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={photos}/>
      <Footer />
    </Fragment>
  );
}

export default App;
