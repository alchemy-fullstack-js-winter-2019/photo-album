import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import dolls from '../assets/720A9917.jpg';




function App() {
  const photos = [dolls];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={photos} />
      <Footer />
    </Fragment>
  );
}

export default App;
