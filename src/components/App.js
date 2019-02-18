import React from 'react';

function App() {
  const listOfDogs = ['Indy', 'Jasmine', 'Lady'].map(name => {
    return <li key ={name}>{name}</li>;
  });
  
  return (
    <>
      <header>
        <h1>My First React App</h1>
      </header>
      <ul>
        {listOfDogs}
      </ul>
      <footer>
        Footer
      </footer>
    </>
  );

}

export default App;
