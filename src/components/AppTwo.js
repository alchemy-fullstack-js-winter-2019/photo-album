import React from 'react';

function AppTwo() {
  const listOfDogs = ['rover', 'spot', 'bingo'].map(name => {
    return <li key={name}>{name}</li>;
  });
  
  return (
    // <ul>
    //   <h1>I am a second title</h1>
    //   <li>Chunky</li>
    //   <li>Sparky</li>
    //   <li>Taco</li>
    // </ul>
    <ul>{listOfDogs}</ul>
  );
}

export default AppTwo;
