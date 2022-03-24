import React, {useContext, useState} from 'react';
//import {userContext} from '../context';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const names = [
  { label: 'Jili Jiang'},
  { label: 'Anthony Duong'},
  { label: 'Dakota Berry' },
  { label: 'Kyle Butler' },
  { label: 'Really Fungii' },
  { label: 'Frank Wang' },
  { label: 'Alex Yoshi' },
  { label: 'Lucas' },
  { label: 'IntocableBrr' },
  { label: 'Christopher' },
];

export default function AutoComplete() {

    //const {value} = useContext(userContext);
    const [name, setName] = useState('')

  return (
    <div >
    <h2 >Auto Complete</h2>
    <h4 >Using REACT Material-UI library's autocomplete component</h4>
    
    <Autocomplete className="input"
      disablePortal 
      id="combo-box-demo" 
      options={names}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="name" />}
      onInputChange = {e => setName(e.currentTarget.innerHTML)} 
      disableClearable={true}
    />
     

    <h4 >Hello, my name is</h4>
    <h2 >{name}</h2>

    </div>
  )
}
