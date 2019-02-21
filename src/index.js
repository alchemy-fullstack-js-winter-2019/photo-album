import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//render allows us to append a child
//only render once
render(
  <App />,
  //append to root
  document.getElementById('root')
);

