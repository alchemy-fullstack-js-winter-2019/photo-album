import React from 'react';
import Header from './Header';


function App() {
  const listOfDogs = ['Indy', 'Jasmine', 'Lady'].map(name => {
    return <li key ={name}>{name}</li>;
  });
  
  return (
    <>
      <Header/>
      <ul>
        {listOfDogs}
      </ul>
      
    </>
  );

}

export default App;
