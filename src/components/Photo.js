import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }) {
  return (
    <span>
      <img src={url} />
    </span>
  );
}
Photo.propTypes = {
  url: PropTypes.string.isRequired
};

export default Photo;
