import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name, about }) { //without the {} you get the entire props object. The {} is to only get the key name
//{} tells them what properties need to be passed in the example above is the name  
//const { name } = props; same thing as above  
  return (
    <>
    <p>This is my dog {name}</p>
    </>
  );
}

Dog.proTypes = { //our way of telling what name is, is it a string, an array
  name: PropTypes.string.isRequired,
  about: PropTypes.string
};

export default Dog;
