import React from 'react';
import Photo from './Photo';
import pet1 from '../assets/IMG_0053.jpg';
import pet2 from '../assets/IMG_0130.jpg';
import pet3 from '../assets/IMG_0188.jpg';
import pet4 from '../assets/IMG_0189.jpg';

const allPets = [pet1, pet2, pet3, pet4];

function Photos() {
  const pets = allPets.map(pic => {
    return <li key={pic}>{pic}</li>;
  });

  return (
    <ul>
      <Photo key={pets}/>
    </ul>
  );
}

export default Photos;
