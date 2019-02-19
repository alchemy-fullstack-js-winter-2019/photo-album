import React from 'react';
import PropTypes from 'prop-types';
import puppy1 from '../assets/puppy1.jpeg';


function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    //const li = document.createElement('li');
    //li.textContent = name;
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      <img src={puppy1} />
      {listOfDogs}
    </ul>
  );
}

Dogs.propTypes = {
  dogs:PropTypes.array.isRequired
};

export default Dogs;

