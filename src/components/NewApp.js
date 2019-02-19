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
  // const photo1 = '/src/assets/ms20.jpg';
  // const photo2 = '/src/assets/kitten.jpg';
  // const photo3 = '/src/assets/roland_juno6.jpg';
  // const photos = [photo1, photo2, photo3];
  return (
    <>
      <Header title={title}/>
      {/* <Photos urls={photos} /> */}
      <PhotoAlbum />
      {/* <Photo url={photo1}/> */}
      <Footer name={name} />
    </>
  );
}

export default NewApp;
