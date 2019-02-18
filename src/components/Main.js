import React from 'react';

function Main() {
  const listOfDogs = ['chompers', 'rover', 'cheddar', 'bailey', 'charlie'].map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      {listOfDogs}
    </ul>
  );
}

export default Main;
