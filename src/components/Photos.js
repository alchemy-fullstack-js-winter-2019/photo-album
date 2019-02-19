import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
// Photos component should take an array 
// of urls and create a list of photos 
// using ul/li and the Photo component
function Photos({ urls }) {
  const listOfPics = urls.map(pic => {
    return <li key={pic}><Photo url={pic}/></li>;
  });
  return (
    <ul>{listOfPics}</ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
