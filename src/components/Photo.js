import React from 'react';
import PropTypes from 'prop-types';
// import styles from './photo.css';


function Photo({ url }) {
  return (
    <>
      <img src={url} />
    </>
  );

}

Photo.propTypes = {
  url: PropTypes.array.isRequired
};


export default Photo;
