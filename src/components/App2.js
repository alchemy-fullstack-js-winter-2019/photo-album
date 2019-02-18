import React from 'react';

function App2() {
  const dogNames = ['scrappy', 'snoopy', 'sloopy', 'slappy', 'sigmund'].map(name => {
    return <li key={name}>{name}</li>;
  });

  return (
    <ul>
      <h1>List of Dogs</h1>
      {dogNames}
    </ul>
  );
}

export default App2;
