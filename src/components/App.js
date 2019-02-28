import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import dolls from '../assets/720A9917.jpg';
import riceKrispies from '../assets/720A9946.jpg';
import cannonBeach from '../assets/cannonbeach2.jpg';
import shopper from '../assets/IMG_0369.png';
import phoneCall from '../assets/IMG_0494.png';
import painter from '../assets/IMG_0503.jpg';
import illustrator from '../assets/IMG_0520.jpg';
import setDesigner from '../assets/IMG_5043.jpg';
import musicians from '../assets/IMG_8253.png';
import hiphop from '../assets/IMG_8373.png';
import singer from '../assets/IMG_8540.png';
import pigeons from '../assets/IMG_9207.png';
import bubblegum from '../assets/IMG_9754.png';
import singertoo from '../assets/IMG_9907.png';
import peopleSitting from '../assets/superchill.jpg';




function App() {
  const photos = [dolls, riceKrispies, cannonBeach, shopper, phoneCall, painter, illustrator, setDesigner, musicians, hiphop, singer, pigeons, bubblegum, singertoo, peopleSitting];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={photos} />
      <Footer />
    </Fragment>
  );
}

export default App;
