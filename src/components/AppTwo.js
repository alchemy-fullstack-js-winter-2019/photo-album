import React from 'react';

function AppTwo() {
  const listOfDogs = ['rover', 'spot', 'bingo'].map(name => {
    return <li key={name}>{name}</li>;
  });
  
  return (
    <ul>{listOfDogs}</ul>
  );
}

export default AppTwo;
