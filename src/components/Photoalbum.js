import React from 'react';
import Photos from './Photos';

//destructuring is more informative other tthan just leaving 
function Photoalbum({ title, photos}) {
  return (
    <section>
      <Photos />
    </section>
  );
}

export default Photoalbum;
