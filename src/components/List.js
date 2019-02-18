import React from 'react';
import PropTypes from 'prop-types';

function List({ dogs }) {
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      {listOfDogs}
    </ul>
  );
}
List.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default List;
