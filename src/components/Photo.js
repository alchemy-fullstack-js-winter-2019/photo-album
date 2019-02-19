import React from 'react';
import PropTypes from 'prop-types';


function Photo({ dog }) {
  return (
    <img src={ dog } />
  );
}

Photo.PropTypes = {
  dog: PropTypes.string.isRequired
};


export default Photo;
