import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';


function Photos({ urls }) {
  const photoList = urls.map(url => {
    return <li key={name}><Photo url={url} /></li>;
  });
  return (
    <ul>

      {photoList}
    </ul>
  );
}

Photos.propTypes = {
  urls:PropTypes.array.isRequired
};

export default Photos;
