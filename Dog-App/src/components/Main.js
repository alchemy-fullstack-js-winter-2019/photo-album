import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.css';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';



function Dogs({ dogs }) {
  const dogNames = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul className={styles.list}>
      {dogNames}
      <div>
        <img src={dog1} />
        <img src={dog2} />
        <img src={dog3} />
      </div>
    </ul>
  );
}

Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Dogs;

