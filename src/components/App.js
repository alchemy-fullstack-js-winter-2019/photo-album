import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import Indy from '../assets/Indy.jpg';
import Lady from '../assets/Lady.jpg';
import Bandit from '../assets/Bandit.jpg';
import Jasmine from '../assets/Jasmine.jpg';
import Poika from '../assets/Poika.jpg';
import Murphy from '../assets/Murphy.jpg';

function App() {
  const pics = [Indy, Lady, Bandit, Jasmine, Poika, Murphy];
  const name = 'My Dogs';

  return (
    <>
      <Header />
      <PhotoAlbum title= {name} photos={pics} />
      <Footer />
    </>
  );
}

export default App;
