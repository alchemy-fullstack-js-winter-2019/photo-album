import React from 'react';
import Footer from './Footer';
import Header from './Header';
import 'normalize.css';
import PhotoAlbum from './Photoalbum';
import portland from '../../imgs/portland.jpg';
import austin from '../../imgs/Austin.jpg';
import denver from '../../imgs/denver.jpg';
import newyork from '../../imgs/newyork.jpg';
import sanfrancisco from '../../imgs/sanfrancisco.jpg';
import Seattle from '../../imgs/Seattle.jpg';
import washington from '../../imgs/washington.jpg';
import 'normalize.css';

import styles from './App.css';




function App() {
  const url = [portland, austin, denver, newyork, sanfrancisco, Seattle, washington];
  return (
    <>
      <Header />
      <PhotoAlbum title='cities' url={url}/> 
      <Footer />
    </>
  );
}

export default App;

