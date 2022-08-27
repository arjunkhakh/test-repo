import React from 'react';
import ArjunNote from './images/ArjunNote.jpg'

export default function Arjun() {
  return (
    <>
    <div>

    <h1 id='centered'>Arjuns Message</h1>
    <center>
    <h2>Note</h2>   
    <img id='image' src={ArjunNote} alt="ArjunNote"></img>  
    </center>
    </div>
    </>
  );
}
