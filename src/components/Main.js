import React from 'react';

function Main() {
  const listOfDogs = ['Rover', 'Spot', 'Bingo'].map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <body>
      <h2>List of DOGS</h2>
      <ul>
        {listOfDogs}
      </ul>
    </body>
  );
}

export default Main;



