import React, { Fragment } from 'react';
import Header from './Header';
// import List from './List';
import Footer from './Footer';
import 'normalize.css';
import beach1 from '../assets/beach1.jpeg';
import beach2 from '../assets/beach2.jpg';
import beach3 from '../assets/beach3.jpeg';
import beach4 from '../assets/beach4.jpeg';
import beach5 from '../assets/beach5.jpeg';
import beach6 from '../assets/beach6.jpeg';
import PhotoAlbum from './PhotoAlbum';


function App() {
    const beaches = [beach1, beach2, beach3, beach4, beach5, beach6];
    const albumTitle = 'My Cool Beaches';
    return (
        <Fragment> 
            <Header/>
            <PhotoAlbum
                beaches={beaches}
                albumTitle={albumTitle}/>
            <Footer/>
        </Fragment>
    );
}

export default App;