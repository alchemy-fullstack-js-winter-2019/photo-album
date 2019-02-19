import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';
import Members from './Members';

function App() {
  const memberNames = ['Snoop', 'Kurupt', 'Daz'].map(name => {
    return <li key={name}>{name}</li>;
  });
  return (
    <Fragment>
      <Header/>
      <Members members={memberNames}/>
      <Footer/>
    </Fragment>
  );
}

export default App;
