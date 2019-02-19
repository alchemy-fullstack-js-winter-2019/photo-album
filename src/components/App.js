import React, { Fragment }from 'react';
import Header from './Header';
import Photos from './Photos';
import Footer from './Footer';
import 'normalize.css';

function App() {
  const photoNames = ['Ramen', 'Pho', 'Spagetthi', 'LoMein', 'Udon'];

  return (
    <Fragment>
      <Header />
      <Photos photos={photoNames} />
      <Footer />
  </Fragment>
  );
}

export default App;