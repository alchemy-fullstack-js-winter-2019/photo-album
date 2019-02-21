import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Dogs from './Main';
import 'normalize.css';

function App() {
  const dogNames = ['scrappy', 'snoopy', 'sloopy', 'slappy', 'sigmund'];

  return (
    <Fragment>
      <Header />
      <Dogs dogs={dogNames} />
      <Footer />
    </Fragment>
  );
}

export default App;
