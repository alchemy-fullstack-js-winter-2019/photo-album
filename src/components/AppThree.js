import React, { Fragment } from 'react';

function AppThree() {
  const listOfThings = ['one', 'two', 'three'].map(thing => {
    return <li key={thing}>{thing}</li>;
  });
  return (
    <Fragment>
      <header>
        <h1>Title of my site</h1>
      </header>
      <main>
        <ul>{listOfThings}</ul>
      </main>
      <footer>
        <span>Cari Palazzolo</span>
      </footer>
    </Fragment>
  );
}

export default AppThree;
