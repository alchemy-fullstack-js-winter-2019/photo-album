import React from 'react';
import Footer from './Footer';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import styles from './App.css';
import 'normalize.css';
import bulldog1 from '../assets/photo1.jpg';
import bulldog2 from '../assets/photo2.jpg';
import bulldog3 from '../assets/photo3.jpg';
import bulldog4 from '../assets/photo4.jpg';
import bulldog5 from '../assets/photo5.jpg';
import bulldog6 from '../assets/photo6.jpg';

function App() {
  const photoURL = [bulldog1, bulldog2, bulldog3, bulldog4, bulldog5, bulldog6];

  return (
    <>
      <div className={styles.container}>
        <Header/>
        <PhotoAlbum title='Bulldogs' url={photoURL}/>
        <Footer />
      </div>
    </>
  );
}

export default App;
