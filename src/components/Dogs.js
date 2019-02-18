import React from 'react';
import PropTypes from 'prop-types';

function Dogs({ dogs }) {
  const listNames = dogs.map(name =>
    <li key={name}>{name}</li>
  );

  return (
    <ul>{listNames}</ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
