import React from 'react';
import portland from '../../imgs/portland.jpg';
import Austin from '../../imgs/Austin.jpg';


function Photos() {

  return (
    <ul>
      <img src={portland} />
      <img src={Austin} />
    </ul>
  );

}


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
