import React from 'react';

function AppThree() {
  const listOfThings = ['one', 'two', 'three'].map(thing => {
    return <li key={thing}>{thing}</li>;
  });
  return (
    <>
      <header>
        <h1>Title of my site</h1>
      </header>
      <main>
        <ul>{listOfThings}</ul>
      </main>
      <footer>
        <span>Cari Palazzolo</span>
      </footer>
    </>
  );
}

export default AppThree;
