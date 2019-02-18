import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// wherever you use JSX you have to import react
// rendow allows us to appendChild components
render(
  <App />,
  document.getElementById('root')
);
