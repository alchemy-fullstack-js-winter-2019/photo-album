import React from 'react';

function App() {
  const listOfDogs = ['rover', 'spot', 'bingo'].map(name => {
    return <li>{name}</li>;
  });

  return (
    <ul>
      {listOfDogs}
    </ul>
  );
}

export default App;
