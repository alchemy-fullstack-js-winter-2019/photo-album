import React from 'react';
import PropTypes from 'prop-types';

function Photo({ url }){
  return (
    <img src={url} /> 
  );

}

Photo.propTypes = {
  photo:PropTypes.array.isRequired
};

export default Photo;
