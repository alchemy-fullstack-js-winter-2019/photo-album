import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Photo from './Photo';
import 'normalize.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Photo />
      <Footer />
    </Fragment>
  );
}

export default App;
