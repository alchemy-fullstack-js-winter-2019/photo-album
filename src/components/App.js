import React, { Fragment } from 'react';
import Header from './Header';
// import List from './List';
import Footer from './Footer';
import 'normalize.css';
import beach1 from '../assets/beach1.jpeg';
import beach2 from '../assets/beach2.jpg';
import PhotoAlbum from './photoAlbum';


function App() {
    const beaches = [beach1, beach2];
    return (
        <Fragment> 
            <Header/>
            <PhotoAlbum beaches={beaches}/>
            <Footer/>
        </Fragment>
    );
}

export default App;