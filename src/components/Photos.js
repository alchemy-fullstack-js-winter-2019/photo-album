import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './Photos.css';

function Photos({ photos }) {
  const listOfPhotos = photos.map(photo => {
    return <Photo url={photo} key={photo} />;
  });

  return (
    <ul className={styles.ul}>{listOfPhotos}</ul>
  );
}
Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
