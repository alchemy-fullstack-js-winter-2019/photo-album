import React from 'react';
import Footer from './Footer';
import Header from './Header';
import 'normalize.css';

import Photoalbum from './Photoalbum';
import 'normalize.css';


function App() {
  // const cities = [portland, austin];
  return (
    <fragment >
      <Header />
      <Photoalbum /> 
      <Footer />
    </fragment>
  );
}

export default App;

