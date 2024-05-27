import React from 'react';
import Laky from './images/LAKY4976.JPG'

function imagesDemo() {
  return (
    <>
      <div>ImagesDemo</div>
      {/* <img src={'require('./images/LAKY4976.JPG')'} height="200" width="200" /> */}
      <img src={require('./logo.jpeg')} />
    </>
  );
}

export default imagesDemo;
