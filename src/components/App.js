import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import doggPound from '../assets/doggPound.jpg';
import warrenG from '../assets/warrenG.jpg';
import bustaRhymes from '../assets/bustaRhymes.jpg';
import tribe from '../assets/tribe.png';
import dasefx from '../assets/dasefx.jpg';
import wutang from '../assets/wutang.jpg';

function App() {
  const photoNames = [
    doggPound,
    warrenG,
    bustaRhymes,
    tribe,
    dasefx,
    wutang
  ];

  return (
    <Fragment>
      <Header/>
      <PhotoAlbum photos={photoNames}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
