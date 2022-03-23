import React, { useState, useEffect } from 'react';
import { sha256 } from 'js-sha256';
import Slider from '../../Components/Slider/Slider';
import { Button } from '@mui/material';

export default function InputOutput({ savePressed, color, setColor, text, setText }) {

  const textStyles = {
    color: color,
    top: '50px',
    display: 'block',
  };

  const innerContainerStyles = {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
  };

  const buttonStyles = {
    border: '1px solid black',
    marginLeft: '20px',
  };

  const containerStyles = {
    padding: '15px',
    margin: '0px',
    height: window.innerHeight,
    width: window.innerWidth,
    margin: 0,
    border: '1px solid white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
  };

  const inputStyle = {
    width: '150px',
    height: '20px',
  };

  function handleChange(e) {
    var hash = sha256(e.target.value);
    var color = '#' + hash.substring(0, 6);
    setText(e.target.value);
    setColor(color);
  }

  function save() {
    savePressed(text, color);
    setText('');
  }

  return (
    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        <input onChange={handleChange} value={text} style={inputStyle} />
        <Button style={buttonStyles} onClick={save}>
          save
        </Button>
      </div>
      <p style={textStyles}>{text}</p>
      <Slider color={color} setColor={setColor} />
    </div>
  );
}
