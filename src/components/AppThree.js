import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Dogs from './Dogs';

function AppThree() {
  const dogNames = [ 'rover', 'spot', 'sparky'];
  // const listOfThings = ['one', 'two', 'three'].map(thing => {
  //   return <li key={thing}>{thing}</li>;
  // });
  return (
    <>
      {/* <header>
        <h1>Title of my site</h1>
      </header> */}
      <Header />
      {/* <main>
        <ul>{listOfThings}</ul>
      </main> */}
      <Dogs dogs={dogNames} />
      <Main />
      {/* <footer>
        <span>Cari Palazzolo</span>
      </footer> */}
      <Footer />
    </>
  );
}

export default AppThree;
