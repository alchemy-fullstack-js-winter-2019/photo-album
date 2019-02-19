import React from 'react';
import PropTypes from 'prop-types';
import dog1 from '../assets/dog1';
import dog2 from '../assets/dog2';
import dog3 from '../assets/dog3';
import dog4 from '../assets/dog4';
import dog5 from '../assets/dog5';
import dog6 from '../assets/dog6';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      Photos 
      <img src={dog1} />
      <img src={dog2} />
      <img src={dog3} />
      <img src={dog4} />
      <img src={dog5} />
      <img src={dog6} />
      {listOfDogs}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
