import React, { Fragment } from 'react';
import Header from './Header';
import Photo from './Photos';
// import Dogs from './Dogs';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Photo />
      <Footer />
    </Fragment>
  );
}

// function App() {
//   const dogNames = ['snowball', 'cookie'];
//   return (
//     <Fragment>
//       <Header />
//       <Dogs dogs={dogNames} />
//       <Footer />
//     </Fragment>
   
//   );
// }

export default App;
