import React from 'react';
import Header from './Header';
import Dogs from './Dogs';
import Footer from './Footer';
import 'normalize.css';

function App() {
  const names = ['auffy', 'buffy', 'cuffy', 'duffy', 'effy'];
  return (
    <>
      <Header />
      <Dogs dogs={names}/>
      <Footer />
    </>
  );
}

export default App;
