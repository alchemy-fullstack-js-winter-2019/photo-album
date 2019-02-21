import React from 'react';
import PropTypes from 'prop-types';
import '../css/Photo.css';

function Photo({ url }) {
  return (
    <div>
      <img src={url}/>
    </div>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
