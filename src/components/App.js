import React from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';
import Indy from '../assets/Indy';

function App() {
  return (
    <>
      <Header />
      <List dogs={dogNames} />
      <Footer />
    </>
  );
}

export default App;
