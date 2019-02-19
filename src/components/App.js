import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Photos from './Photos';

function App() {
  const photoNames = ['Tha Dogg Pound', 'Warren G', 'Busta Rhymes'].map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <Fragment>
      <Header/>
      <Photos photos={photoNames}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
