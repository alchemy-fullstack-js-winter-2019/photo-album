import React, { Fragment }from 'react';
import Header from './Header';

function App() {
  const listOfDogs = ['Scruffy', 'Buddy', 'Coco', 'Milo', 'Jack'].map(name => {
    return <li>{name}</li>;
  });
  return (
    <Fragment>
      <Header />
        <ul>
          {listOfDogs}
        </ul>
      <footer>Dyanna</footer>
  </Fragment>
  );
}

export default App;