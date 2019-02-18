import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dogs.css';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul className={styles.dogs}>{listOfDogs}</ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};
export default Dogs;
