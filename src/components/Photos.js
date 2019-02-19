import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ dogs }) {
  const listOfDogs = dogs.map(dog => {
    return <li key={dog}><Photo dog={ dog }/></li>;
  });
  return (
    <>
    {listOfDogs}
    </>
  );
}

Photos.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Photos;
