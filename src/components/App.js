import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';

import happy1 from '../assets/happy1.png';
import happy2 from '../assets/happy2.png';
import happy3 from '../assets/happy3.png';
import happy4 from '../assets/happy4.png';
import happy5 from '../assets/happy5.png';
import sad1 from '../assets/sad1.png';
import sad2 from '../assets/sad2.png';
import sad3 from '../assets/sad3.png';
import sad4 from '../assets/sad4.png';
import sad5 from '../assets/sad5.png';
import 'normalize.css';

function App() {
  const happy = [happy1, happy2, happy3, happy4, happy5];
  const sad = [sad1, sad2, sad3, sad4, sad5];

  return (
    <>
      <Header />
      <PhotoAlbum
        title='Happy Emojis'
        urls={happy}
      />
      <PhotoAlbum
        title='Sad Emojis'
        urls={sad}
      />
      <Footer />
    </>
  );
}

export default App;
