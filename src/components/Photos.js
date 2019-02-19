import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ urls }) {
  const listOfUrls = urls.map(url => {
    return (
      <li key={url}>
        <Photo url={url}/>
      </li>
    );
  });
  
  return (
    <Fragment>
      <ul>
        <li>{listOfUrls}</li>
      </ul>
    </Fragment>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
