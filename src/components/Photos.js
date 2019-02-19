import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from '../css/Photos.css';

function Photos({ urls }) {
  console.log('photos', urls);
  const listOfUrls = urls.map(url => {
    return <li key={url}><Photo url={url} /></li>;
  });

  return (
    <ul className={styles.ul}>
      <li>{listOfUrls}</li>
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
