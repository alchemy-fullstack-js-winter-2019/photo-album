import React from 'react';

function Main() {
  const dogs = ['Penelope', 'Peppa', 'Pepperoni', 'Pineapple', 'Perogi'];
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });
  
  return (
    <main>
      <h1>List of dogs</h1>
      <ul>
        {listOfDogs}
      </ul>
    </main>
  );
}

export default Main;
