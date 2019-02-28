import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Photo.css';

function Photo({ url }) {
  return (
    <span className={styles.li}>
      <img src={url} />
    </span>
  );
}
Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
