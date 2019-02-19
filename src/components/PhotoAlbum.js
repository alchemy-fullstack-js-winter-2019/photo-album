import React from 'react';
import styles from './List.css';
import dog from '../assets/dog.jpeg';
import dog2 from '../assets/dog2.jpeg';
import dog3 from '../assets/dog3.jpeg';
import dog4 from '../assets/dog4.jpeg';
import dog5 from '../assets/dog5.jpeg';
import dog6 from '../assets/dog6.jpeg';

const dogs = [dog, dog2, dog3, dog4, dog5, dog6];

function PhotoAlbum() {
  return (
    <ul className={styles.list}>
    </ul>
  );
}

export default PhotoAlbum;
