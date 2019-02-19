import React, { Fragment } from 'react';
import Header from './Header';
import Dogs from './Dogs';
import Footer from './Footer';
import 'normalize.css';

function App() {
  const dogNames = ['rover', 'spot', 'bingo'];

  return (
    <Fragment>
      <Header />
      <Dogs dogs={dogNames} />
      <Footer />
    </Fragment>
  );
}

export default App;
