import React from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import photo10 from '../assets/photo10.jpg';
import photo11 from '../assets/photo11.jpg';
import photo12 from '../assets/photo12.jpg';
import styles from '../css/Main.css';
import 'normalize.css';

function Main() { 
  return (
    <ul className={styles}>
      <li><img src={photo1}/></li>
      <li><img src={photo2}/></li>
      <li><img src={photo3}/></li>
      <li><img src={photo4}/></li>
      <li><img src={photo5}/></li>
      <li><img src={photo6}/></li>
      <li><img src={photo7}/></li>
      <li><img src={photo8}/></li>
      <li><img src={photo9}/></li>
      <li><img src={photo10}/></li>
      <li><img src={photo11}/></li>
      <li><img src={photo12}/></li>
    </ul>
  );
}

export default Main;
