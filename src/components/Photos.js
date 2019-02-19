import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';


function Photos({ photos }) {
  const listOfPhotos = photos.map(photo => {
    return <Photo url={photo} />
  });

  return (
    <ul>{listOfPhotos}</ul>
  );
}
Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
