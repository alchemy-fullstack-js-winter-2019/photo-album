import React from 'react';
import PropTypes from 'prop-types';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <main>
      <ul>{listOfDogs}</ul>
    </main>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
}
export default Dogs;
