import React from 'react';
import Footer from './Footer';
import Header from './Header';

import portland from '../../imgs/portland.jpg';
import austin from '../../imgs/Austin.jpg';
import 'normalize.css';


function App() {
  const cities = [portland, austin];
  const albumName = 'topCities';
  return (
    <fragment >
      <Header />
      <photoAlbum cities={cities} albumName={albumName}/>
      <Footer />
    </fragment>
  );
}

export default App;

