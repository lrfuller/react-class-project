import React, { useState } from 'react';
import '../../style.css';
import InputOutput from './InputOutput/InputOutput';
import Sidebar from './Sidebar/Sidebar';
import Local from '../../services/Persistence';

export default function DakotaPage(){

    const [text, setText] = useState('');
    const [color,setColor] = useState('black');
    let [RColor, setRColor] = useState(0);
    let [GColor, setGColor]=useState(0);
    let [BColor, setBColor]=useState(0);


const rSliderStyle = {
    height: '75px',
    width: '2px',
    marginTop: '5px',
    color: 'red',
};

const gSliderStyle = {
  height: '75px',
  width: '2px',
  marginTop: '5px',
  color: 'green',
};

const bSliderStyle = {
  height: '75px',
  width: '2px',
  marginTop: '5px',
  color: 'blue',
};

  function getText(val){
    const newInput = val.target.value;
    setText(newInput);
  }

  function getRColor(val){
    const newValue = val.target.value;
    setRColor(newValue);
  }

  function getGColor(val){
    const newValue = val.target.value;
    setGColor(newValue);
  }

  function getBColor(val){
    const newValue = val.target.value;
    setBColor(newValue);
  }

  useEffect(()=>{
    const combineColors = '#' + parseInt(RColor,10).toString(16).padStart(2,"0") + parseInt(GColor,10).toString(16).padStart(2,"0") + parseInt(BColor,10).toString(16).padStart(2,"0");
    setColor(combineColors);
    console.log(color);
  },[RColor, GColor, BColor]);


    return (
        <div>
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <input type='text' value={text} onChange={getText}/>
                </Grid>
                <Grid item xs={4}>
                    <Stack sx={{ height: 75 }} spacing={1} direction="row">
                        <Slider aria-label="RSlider" style={rSliderStyle} orientation="vertical" defaultvalue={255}  min={0} max={255} onChange={getRColor}/>
                        <Slider aria-label="GSlider" style={gSliderStyle} orientation="vertical" defaultvalue={255}  min={0} max={255} onChange={getGColor}/>
                        <Slider aria-label="BSlider" style={bSliderStyle} orientation="vertical" defaultvalue={255}  min={0} max={255} onChange={getBColor}/>
                    </Stack>
                </Grid>
            </Grid>
            <p style={{ color: color}}>{text}</p>
        </Box>
        </div>
    );
}