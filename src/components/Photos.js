import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

// import portland from '../../imgs/portland.jpg';
// import Austin from '../../imgs/Austin.jpg';


function Photos({ url }) {
  const photoLi = url.map(url => {
    return (
      <li key={url}><Photo url={url} /> </li>
    );
  });

  return (
    <ul>{photoLi}</ul>
  );

}

Photos.propTypes = {
  url: PropTypes.array.isRequired
};


export default Photos;



//after line 7
// const cityList = cities.map(name => {
//   return <li key={name}>{name}</li>;
// });

//after line 16
// Cities.propTypes = {
//   cities: PropTypes.array.isRequired
// };


//this went under line 14  {listOfCities}
