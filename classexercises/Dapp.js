import React, { Fragment } from 'react';
import Header from '../src/components/Header';
import Dogs from './Dogs';
import Footer from '../src/components/Footer';



function App() {
  const dogNames = ['snowball', 'cookie'];
  return (
    <Fragment>
      <Header />
      <Dogs dogs={dogNames} />
      <Footer />
    </Fragment>
   
  );
}




export default App;
