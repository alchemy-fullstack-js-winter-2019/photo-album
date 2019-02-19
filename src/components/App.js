import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import batman from '../assets/batman.jpg';
import blackWidow from '../assets/blackwidow.jpg';
import wonderWoman from '../assets/wonderwoman.jpg';
import 'normalize-css';

function App() {
  const photos = [batman, blackWidow, wonderWoman];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={photos}/>
      <Footer />
    </Fragment>
  );
}

export default App;
