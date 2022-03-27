import React, {useState, useEffect} from "react";
//Style.css doesn't seem to matter. Why?
import { sha256 } from 'js-sha256';
import { ToggleButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function App() {
  let [data, setData] = useState(null)
  const [color, setColor] = useState(null)
  let [selected, setSelected] = useState(false)


  //The function 'getData' collects the text input by the user and saves it as the variable 'data'.
  function getData(val){
    let newInput = val.target.value;
    setData(newInput)
  }

  //The bellow if/else statement turns the colored text on and off based on the toggle button found bellow. 
  //The 'useEffect' hook tracks and updates the color in real time based on the toggle button / user input
  useEffect(() => {
    if (selected == true){
      const hash = sha256(data);
      console.log(hash)
      setColor("#" + hash.substring(0,6))
    } else setColor("black");
  });


  return (
    <div>
      <label>
        Words? &ensp;
      <input onChange={getData} /> 
        <p style = { {color : color} }> {data} </p>
      </label>
      <label>
        Color: &ensp;
      <ToggleButton
        value = "check"
        selected = {selected}
        onChange ={() => {  setSelected(!selected);  }}
        >
        <CheckIcon />
      </ToggleButton>
      </label>
    </div>
  );
}
