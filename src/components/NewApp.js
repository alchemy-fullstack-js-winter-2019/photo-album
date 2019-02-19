import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PhotoAlbum from './PhotoAlbum';
import 'normalize.css';

function NewApp() {
  const title = 'Cari\'s amazing Photo Album app';
  const name = 'Cari Palazzolo';
  const albumTitle = 'Synthesizers';
  const photos = [
    '/src/assets/ms20.jpg',
    '/src/assets/kitten.jpg',
    '/src/assets/roland_juno6.jpg',
    '/src/assets/korg_ms2000.jpg',
    '/src/assets/casio_ct401.jpg',
    '/src/assets/crumar_stratus_2.jpg',
    '/src/assets/roland_jupiter6.jpg',
    '/src/assets/moog_opus3.jpg',
    '/src/assets/yamaha_cs5.jpg',
    '/src/assets/moog_minimoogd.jpg'
  ];
  return (
    <>
      <Header title={title}/>
      <PhotoAlbum title={albumTitle}
        urls={photos}
      />
      <Footer name={name} />
    </>
  );
}

export default NewApp;
