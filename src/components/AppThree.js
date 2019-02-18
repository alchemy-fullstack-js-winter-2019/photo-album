import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Dogs from './Dogs';

function AppThree() {
  const dogNames = ['rover', 'spot', 'sparky'];
  return (
    <>
      <Header />
      <Dogs dogs={dogNames} />
      <Main />
      <Footer />
    </>
  );
}

export default AppThree;
