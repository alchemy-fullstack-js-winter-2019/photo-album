import React from 'react';
import Header from './Header';
import List from './List';
import Footer from './Footer';

function App() {
  const dogNames = ['Indy', 'Jasmine', 'Lady'];
  
  return (
    <>
      <Header />
      <List dogs={dogNames} />
      <Footer />
    </>
  );
}

export default App;
