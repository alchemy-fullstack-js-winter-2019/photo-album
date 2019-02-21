import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import '../css/Photos.css';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';
import dog4 from '../assets/dog4.jpg';
import dog5 from '../assets/dog5.jpeg';
import dog6 from '../assets/dog6.jpg';


function Photos({ urls }) {
  const listOfUrls = urls.map(url => {
    return <li key={url}><Photo url={url}/></li>;
  });
  return (
    <ul>
      <img src={dog1} />
      <img src={dog2} />
      <img src={dog3} />
      <img src={dog4} />
      <img src={dog5} />
      <img src={dog6} />
      {listOfUrls}
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
