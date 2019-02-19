import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.css';

function List({ dogs }) {
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul className={styles.list}>
      {listOfDogs}
    </ul>
  );
}
List.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default List;
