import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photos.css';
import album1 from '../assets/doggPound.jpg';
import album2 from '../assets/warrenG.jpg';
import album3 from '../assets/bustaRhymes.jpg';
import album4 from '../assets/tribe.png';
import album5 from '../assets/dasefx.jpg';
import album6 from '../assets/wutang.jpg';

function Photos({ photos }) {
  const listOfPhotos = photos.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul className={styles.photos}>
      <img src={album1} />
      <img src={album2} />
      <img src={album3} />
      <img src={album4} />
      <img src={album5} />
      <img src={album6} />
      {listOfPhotos}
    </ul>
  );
}

Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
