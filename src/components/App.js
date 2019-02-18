import React from 'react'; 

function App() {
  const listOfDogs = ['roger', 'sophie', 'bubba'].map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      {listOfDogs}
    </ul>
  );
}

export default App;
