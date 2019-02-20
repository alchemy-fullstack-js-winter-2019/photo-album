import React, { Fragment } from 'react';
import Header from '../src/components/Header';
import Dogs from './Dogs';
import Footer from '../src/components/Footer';
import styles from 



function App() {
  const dogNames = [name: 'snowball', about:'good dog', name: 'cookie', about: 'ok dog'];
  return (
    <Fragment>
      <Header />
      <Dogs namesOfdogs={dogNames} />
      <Footer />
    </Fragment>
   
  );
}




export default App;
