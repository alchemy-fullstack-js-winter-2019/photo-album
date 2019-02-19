import React from 'react';
import PropTypes from 'prop-types';
// import styles from './photo.css';
import Photo from './Photo';


function Photos({ url }) {
  url.map(name => {
    const li = document.createElement('li');
    li.textContent = name;
    return <li key={name}>{name}</li>;
  });
  return (
    <>
      <Photo url={url}/>
    </>
  );

}

Photos.propTypes = {
  url: PropTypes.array.isRequired
};

export default Photos;
