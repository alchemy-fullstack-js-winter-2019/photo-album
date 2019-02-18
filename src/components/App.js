import React, { Fragment } from 'react';

function App() {
  const dogNames = ['scrappy', 'snoopy', 'sloopy', 'slappy', 'sigmund'].map(name => {
    return <li key={name}>{name}</li>;
  });

  return (
    <Fragment>
      <header>
        <h1>My Dog Site</h1>
      </header>
      <ul>
        {dogNames}
      </ul>
      <footer>Kate</footer>
    </Fragment>
  );
}

export default App;
