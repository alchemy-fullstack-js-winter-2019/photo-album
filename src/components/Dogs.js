import React from 'react';
import PropTypes from 'prop-types';
import dogs1 from '../assets/dogs1.jpg';

function Dogs(props) {
  const listOfDogs = ['Scruffy', 'Buddy', 'Coco', 'Milo', 'Jack'].map(name => {
    return <li key={name}>{name}</li>;
});
  return (
    <ul>
      <img src={dogs1} />
      {listOfDogs}
    </ul>
  );
}
//specify PropTypes to export
Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;