import React from 'react';
import PropTypes from 'prop-types';

function Photos(props) {
  const listOfPhotos = ['Ramen', 'Pho', 'Spagetthi', 'LoMein', 'Udon'].map(name => {
    return <li key={name}>{name}</li>;
});
  return (
    <ul>
      <img src={noodles1} />
      {listOfPhotos}
    </ul>
  );
}
//specify PropTypes to export
Photos.propTypes = {
  photos: PropTypes.array.isRequired
};

export default Photos;