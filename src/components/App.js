import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import styles from '../css/App.css';

function App() {
  return (
    <Fragment className={styles}> 
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;

