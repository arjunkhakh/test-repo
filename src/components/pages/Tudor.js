import React from 'react';
import TudorNote from './images/TudorNote.jpg'

export default function Tudor() {
  return (
    <>
    <div>
      
    <h1 id='centered'>Tudors Message</h1>
    <center>
         <h2>Note</h2>
    <img id='image' src={TudorNote} alt="TudorNote"></img>
    </center>
      </div>
    </>
  );
}
