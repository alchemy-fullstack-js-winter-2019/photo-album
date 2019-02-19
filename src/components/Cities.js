import React from 'react';
import PropTypes from 'prop-types';


function Cities({ cities }) {
  const cityList = cities.map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      <img src={portland} />
      <img src={austin} />
      {cityList}
    </ul>
  );

}

Cities.propTypes = {
  cities: PropTypes.array.isRequired
};

export default Cities;
