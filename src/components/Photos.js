import React from 'react';
import PropTypes from 'prop-types';
// import styles from './photo.css';
import Photo from './Photo';


function Photos({ url }) {
  const urlList = url.map(url => {
    return <li key={url}><Photo url={url} /></li>;
  });
  return (
    <ul>
      <li>{urlList}</li>
    </ul>
  );

}

Photos.propTypes = {
  url: PropTypes.array.isRequired
};

export default Photos;
