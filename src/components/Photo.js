import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }) {
  return (
    <li>
      <img src={url} />
    </li>
  );
}

Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
