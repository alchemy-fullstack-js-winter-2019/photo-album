import React from 'react';
import Photos from './Photos';
import styles from '../css/PhotoAlbum.css';
import jupiter from '../assets/jupiter.jpg';
import mercury from '../assets/mercury.jpg';
import neptune from '../assets/neptune.jpg';
import uranus from '../assets/uranus.jpg';
import venus from '../assets/venus.jpg';

function PhotoAlbum() {
  const planets = [jupiter, mercury, neptune, uranus, venus];
  console.log(planets);
  return (
    <main className={styles.main}>
      <h2>planetz</h2>
      <Photos urls={planets}/>
    </main>
  );
}

export default PhotoAlbum;
