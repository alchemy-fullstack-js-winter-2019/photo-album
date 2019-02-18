import React from 'react';
import PropTypes from 'prop-types';


function Dogs({ dogs }) {
  const dogNames = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      {dogNames}
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;

