import React from 'react';
import styles from './Main.css';

function Main() {
  const listOfThings = ['one', 'two', 'three'].map(thing => {
    return <li key={thing}>{thing}</li>;
  });
  return (
    <main className={styles.main}>
      <ul>{listOfThings}</ul>
    </main>
  );
}

export default Main;
