import React from 'react';
import PropTypes from 'prop-types';

// Photo component should take a url 
// to a photo and display it.
function Photo({ url }) {
  return (
    <img src={url} />
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
