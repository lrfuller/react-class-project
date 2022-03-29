import React from "react";
import './style-names.css';
import Autocomplete1 from './Autocomplete1/Autocomplete1';
import Hashcolors from './Hashcolors/Hashcolors';

export default function Names(){

    return (
    <div>
        <Hashcolors/>
        <div>------------------------------------</div>        
        <Autocomplete1/>
    </div>
  )
}