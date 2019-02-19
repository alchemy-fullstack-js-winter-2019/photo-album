import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import styles from '../css/App.css';

function App() {
  return (
    <Fragment className={styles}> 
      <Header />
      <PhotoAlbum
        title='Dream Places'/>
      <Footer />
    </Fragment>
  );
}

export default App;

