import React, {useContext, useState} from 'react';
//import {userContext} from '../context'

var sha256 = require('js-sha256');

export default function Hashcolors() {

  const [myName, setMyName] = useState("name");
  const [color, setColor] = useState("black");
  //const {value} = useContext(userContext);

  const changeColor =(e)=>{
    const input = e.target.value;
    const hash = sha256(input);
    const newColor= "#"+hash.substring(0,6);
    //console.log(newColor);
    setColor(newColor);
    setMyName(e.target.value);
  }

  return (
    <div >
      <h2>Hashing Color</h2>
      <h4>Setting up a unique color for an input by hashing color from the input itself. </h4>

      <input type="text" placeholder="name" onChange={e=>{changeColor(e)}} />
      <h4>Hello, my name is:</h4>
      <h2 style={{color: color}}>{myName}</h2>

    </div>
  );
}
