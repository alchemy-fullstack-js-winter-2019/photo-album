import React from 'react';
import PropTypes from 'prop-types';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';
import dog4 from '../assets/dog4.jpg';
import dog5 from '../assets/dog5.jpg';
import dog6 from '../assets/dog6.jpg';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      <img src={dog1} />
      <img src={dog2} />
      <img src={dog3} />
      <img src={dog4} />
      <img src={dog5} />
      <img src={dog6} />
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
