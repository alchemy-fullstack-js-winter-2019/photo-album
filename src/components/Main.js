import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/Main.css';

function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });

  return (
    <main className={styles.main}>
      <h1>List of dogs</h1>
      <ul>
        {listOfDogs}
      </ul>
    </main>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
