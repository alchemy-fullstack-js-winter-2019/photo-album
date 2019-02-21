import React, { Fragment } from 'react'; 
import Header from './Header';
import Footer from './Footer';
import 'normalize.css';
import PhotoAlbum from './PhotoAlbum';
import dog1 from '../assets/dog1.jpg';
import dog2 from '../assets/dog2.jpg';
import dog3 from '../assets/dog3.jpg';
import dog4 from '../assets/dog4.jpg';
import dog5 from '../assets/dog5.jpeg';
import dog6 from '../assets/dog6.jpg';
import dog7 from '../assets/dog7.jpg';

function App() {
  const photos = [dog1, dog2, dog3, dog4, dog5, dog6, dog7];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={photos} />
      <Footer />
    </Fragment>
  );
}

export default App;
