import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './Photos.css';

function Photos({ urls }) {
  const photosList = urls.map((url, i) =>
    <li key={i}><Photo url={url}/></li> 
  );

  return (
    <ul className={styles.photos}>{photosList}</ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
