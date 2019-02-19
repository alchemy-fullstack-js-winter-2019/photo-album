import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Photos from './Photos';
import Indy from '../assets/Indy.jpg';
import Lady from '../assets/Lady.jpg';
import 



function App() {
  const pics = [Indy, Lady];
  return (
    <>
      <Header />
      <Photos photos={pics} />
      <Footer />
    </>
  );
}

export default App;
