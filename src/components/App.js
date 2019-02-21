import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';
import 'normalize.css';
import pho from '../assets/pho.jpg';
import ramen from '../assets/ramen.jpg';
import spagetthi from '../assets/spagetthi.jpg';
import udon from '../assets/udon.jpg';


function App() {
  const photos = [pho, ramen, spagetthi, udon];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={photos} />
      <Footer />
    </Fragment>
  );
} 

export default App;
