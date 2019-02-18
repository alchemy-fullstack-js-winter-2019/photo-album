import React from 'react';

function Main() {
  const names = ['auffy', 'buffy', 'cuffy', 'duffy', 'effy'];

  const listNames = names.map(name =>
    <li key={name}>{name}</li>
  );

  return (
    <ul>{listNames}</ul>
  );
}

export default Main;
