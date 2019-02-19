import React from 'react';
import Header from './Header';
import Footer from './Footer';
// import Photo from './Photo';
// import Photos from './Photos';
import 'normalize.css';
import PhotoAlbum from './PhotoAlbum';

function NewApp() {
  const title = 'Cari\'s amazing Photo Album app';
  const name = 'Cari Palazzolo';
  const albumTitle = 'Synthesizers';
  const photo1 = '/src/assets/ms20.jpg';
  const photo2 = '/src/assets/kitten.jpg';
  const photo3 = '/src/assets/roland_juno6.jpg';
  const photo4 = '/src/assets/korg_ms2000.jpg';
  const photo5 = '/src/assets/casio_ct401.jpg';
  const photo6 = '/src/assets/crumar_stratus_2.jpg';
  const photo7 = '/src/assets/roland_jupiter6.jpg';
  const photo8 = '/src/assets/moog_opus3.jpg';
  const photo9 = '/src/assets/yamaha_cs5.jpg';
  const photo10 = '/src/assets/moog_minimoogd.jpg';
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];
  return (
    <>
      <Header title={title}/>
      {/* <Photos urls={photos} /> */}
      <PhotoAlbum title={albumTitle}
        urls={photos}
      />
      {/* <Photo url={photo1}/> */}
      <Footer name={name} />
    </>
  );
}

export default NewApp;
