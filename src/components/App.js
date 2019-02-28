import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';




function App() {
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={photos} />
      <Footer />
    </Fragment>
  );
}

export default App;
