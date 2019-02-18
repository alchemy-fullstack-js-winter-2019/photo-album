import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';
import Dogs from './dogs';

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
