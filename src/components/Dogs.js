import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dogs.css';

function Dogs({ dogs }) {
  const listNames = dogs.map(name =>
    <li key={name}>{name}</li>
  );

  return (
    <ul className={styles.main}>{listNames}</ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;
