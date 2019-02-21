import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import styles from '../CSS/Photos.css';


function Photos({ urls }) {
  const pets = urls.map(pic => {
    return <Photo key={pic} url={pic}></Photo>;
  });

  return (
    <ul className={styles.list}>
      {pets}
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
