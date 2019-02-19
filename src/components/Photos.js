import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';


function Photos({ urls }) {
  const pets = urls.map(pic => {
    return <Photo key={pic} url={pic}></Photo>;
  });

  return (
    <ul>
      {pets}
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
