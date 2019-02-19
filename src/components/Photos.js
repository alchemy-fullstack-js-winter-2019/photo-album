import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ urls }) {
  console.log('photos', urls);
  const listOfUrls = urls.map(url => {
    return <li key={url}><Photo url={url} /></li>;
  });

  return (
    <ul>
      <li>I am the photos component</li>
      <li>{listOfUrls}</li>
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
