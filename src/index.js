// // console.log('hiiiiiiiii'); // eslint-disable-line no-console

// const root = document.getElementById('root');
// const ul = document.createElement('ul');
// root.appendChild(ul);

// ['one', 'two', 'three', 'four', 'five']
//   .map(name => {
//     const li = document.createElement('li');
//     li.textContent = name;
//     return li;
//   })
//   .forEach(li => ul.appendChild(li));

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
  <App />, // this is 'jsx'
  document.getElementById('root')
);
