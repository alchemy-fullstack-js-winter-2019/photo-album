import React from 'react';
import PropTypes from 'prop-types';

function Dogs(props) {
  const listOfDogs = ['Scruffy', 'Buddy', 'Coco', 'Milo', 'Jack'].map(name => {
    return <li key={name}>{name}</li>;
});
  return (
    <ul>
      {listOfDogs}
    </ul>
  );
}
//specify PropTypes to export
Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;