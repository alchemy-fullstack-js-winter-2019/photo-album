import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Photo from './Photo';
import 'normalize.css';

function NewApp() {
  const title = 'Cari\'s amazing Photo Album app';
  const name = 'Cari Palazzolo';
  const photo1 = './src/assets/ms20.jpg';
  return (
    <>
      <Header title={title}/>
      <Photo url={photo1}/>
      <Footer name={name} />
    </>
  );
}

export default NewApp;
