import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Dogs from './Dogs';
import 'normalize.css';

function AppThree() {
  const name = 'Cari Palazzolo';
  const title = 'Cari\'s amazing app';
  const dogNames = ['rover', 'spot', 'sparky'];
  return (
    <>
      <Header title={title}/>
      <Dogs dogs={dogNames} />
      <Main />
      <Footer name={name} />
    </>
  );
}

export default AppThree;
