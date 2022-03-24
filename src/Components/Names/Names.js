import React from "react";
import './style-names.css';
import AutoComplete from './AutoComplete/AutoComplete';
import HashColors from './HashColors/HashColors';

export default function Names(){

    return (
    <div>
        <HashColors/>
        <div>------------------------------------</div>        
        <AutoComplete/>
    </div>
  )
}