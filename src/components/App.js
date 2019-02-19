import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';
import 'normalize.css';

function App() {
  return (
    <Fragment>
      <Header />
      <PhotoAlbum />
      <Footer />
    </Fragment>
  );
}

export default App;
