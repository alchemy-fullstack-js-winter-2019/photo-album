import React from 'react';

function App() {

  const dogs = ['Penelope', 'Peppa', 'Pepperoni', 'Pineapple', 'Perogi'];
  const listOfDogs = dogs.map(name => {
    return <li key={name}>{name}</li>;
  });

  return (
    <span>
      <header>
        <h1>Awesome amazing super site</h1>
      </header>

      <main>
        <h1>List of dogs</h1>
        <ul>
          {listOfDogs}
        </ul>
      </main>

      <footer>
        © 2019 | Paige E. Gorry
      </footer>
    </span>
  );
}

export default App;
