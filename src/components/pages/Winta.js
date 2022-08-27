import React from 'react';
import WintaNote from './images/WintaNote.jpg'
import WintaDrawing from './images/WintaDrawing1.jpg'
import WintaDrawing2 from './images/WintaDrawing2.jpg'

export default function Winta() {
  return (
    <>
    <div>
      
      <h1 id='centered'>Wintas Message</h1>
      <center>
        <h2>Notes</h2>
    <img id='image' src={ WintaNote } alt="WintaImage"></img>
        <h2>Images</h2>
    <img id='image' src={ WintaDrawing } alt="WintaImage"></img>
    <img id='image' src={ WintaDrawing2 } alt="WintaImage"></img>
    </center>
      </div>
    </>
  );
}

