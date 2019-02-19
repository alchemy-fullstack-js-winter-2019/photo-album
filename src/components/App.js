import React, { Fragment } from 'react'; 
import Header from './Header';
import Dogs from './Dogs';
import Footer from './Footer';
import 'normalize.css';


function App() {
  const dogNames = ['dog1', 'dog2', 'dog3', 'dog4', 'dog5', 'dog6'];
 
  return (
    <Fragment>
      <Header />
      <Dogs dogs={dogNames} />
      <Footer />
    </Fragment>
  );
}

export default App;
