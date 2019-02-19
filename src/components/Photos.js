import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import styles from './Photos.css';

function Photos({ dogs }) {
  const listOfDogs = dogs.map(dog => {
    return <li key={dog} className={styles.li} ><Photo dog={ dog }/></li>;
  });
  return (
    <>
    <ul className={styles.ul}>
      {listOfDogs}
    </ul>
    </>
  );
}

Photos.propTypes = {
  dogs: PropTypes.array.isRequired
};

export default Photos;
