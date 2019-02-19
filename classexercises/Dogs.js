import React from 'react';
import PropTypes from 'prop-types';
import puppy1 from '../assets/puppy1.jpeg';
import Dog from './Dog';


function Dogs({ namesOfDogs }) { //Dogs is the parent 
  const listOfDogs = dogs.map(dog => { // or ({name, about })
    //const li = document.createElement('li');
    //li.textContent = name;
    //const props = {
    //   name: name,
    //   about: about
    // }
    //Dog(props); Dog is a function that props
    return <li key={name}>Dog name={dog.name} Dog about={dog.about}</li>; //passing the name to this dog component
  //the li key={name} is a way to identify a list item. It's reacts way to identifies by key name
  });
  return (
    <ul>
      <img src={puppy1} />
      <img src={puppy2} />
      {listOfDogs}
    </ul>
  );
}

Dogs.propTypes = {
  dogs:PropTypes.array.isRequired
};

export default Dogs;

