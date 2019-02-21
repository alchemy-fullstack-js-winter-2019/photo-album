import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import 'normalize.css';

import pet1 from '../assets/IMG_0053.jpg';
import pet2 from '../assets/IMG_0130.jpg';
import pet3 from '../assets/IMG_0188.jpg';
import pet4 from '../assets/IMG_0189.jpg';
import pet5 from '../assets/IMG_0190.jpg';
import pet6 from '../assets/IMG_0192.jpg';
import pet7 from '../assets/IMG_0459.jpg';
import pet8 from '../assets/IMG_0657.jpg';
import pet9 from '../assets/IMG_0683.jpg';
import pet10 from '../assets/IMG_0708.jpg';
import pet11 from '../assets/IMG_0727.jpg';
import pet12 from '../assets/IMG_0731.jpg';
import pet13 from '../assets/IMG_0733.jpg';
import pet14 from '../assets/IMG_0739.jpg';
import pet15 from '../assets/IMG_0742.jpg';
import pet16 from '../assets/IMG_0745.jpg';
import pet17 from '../assets/IMG_0816.jpg';
import pet18 from '../assets/IMG_0818.jpg';
import pet19 from '../assets/IMG_1048.jpg';
import pet20 from '../assets/IMG_2507.jpg';
import pet21 from '../assets/IMG_3273.jpg';
import pet22 from '../assets/IMG_6548.jpg';
import pet23 from '../assets/IMG_6807.jpg';
import pet24 from '../assets/IMG_6810.jpg';
import pet25 from '../assets/IMG_7918.jpg';
import pet26 from '../assets/IMG_8827.jpg';
import pet27 from '../assets/IMG_8828.jpg';
import pet28 from '../assets/IMG_8938.jpg';
import pet29 from '../assets/IMG_9110.jpg';

const allPets = [pet1, pet2, pet3, pet4, pet5, pet6, pet7, pet8, pet9, pet10, pet11, pet12, pet13, pet14, pet15, pet16, pet17, pet18, pet19, pet20, pet21, pet22, pet23, pet24, pet25, pet26, pet27, pet28, pet29];

function App() {
  return (
    <Fragment>
      <Header />
      <PhotoAlbum photos={allPets} />
      <Footer />
    </Fragment>
  );
}

export default App;
