import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';

function Photos({ photos }) {
  const listOfPhotos = photos.map(photo => {
    return (<li key={photo}><Photo photo={photo} /></li>);
  });
  return (
    <div>
      {listOfPhotos}
    </div>
  );
}
//specify PropTypes to export
Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;
