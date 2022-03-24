import React, { useState, useEffect } from 'react';
import { Slider as SliderMUI } from '@mui/material';

export default function Slider({ color, setColor }) {
  const sliderStyles = {
    width: '200px',
    marginTop: '50px',
    color: 'red',
  };
  const gSliderStyles = {
    width: '200px',
    marginTop: '50px',
    color: 'green',
  };
  const bSliderStyles = {
    width: '200px',
    marginTop: '50px',
    color: 'blue',
  };

  let [rValue, setRValue] = useState(0);
  let [gValue, setGValue] = useState(0);
  let [bValue, setBValue] = useState(0);
  const [RGBVAlue, setRGBValue] = useState('RGB(70,70,70)');

  function colorToRGBA(color) {
    var cvs, ctx;
    cvs = document.createElement('canvas');
    cvs.height = 1;
    cvs.width = 1;
    ctx = cvs.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    return ctx.getImageData(0, 0, 1, 1).data;
  }

  useEffect(() => {
    let colors = colorToRGBA(color);
    setRValue((rValue = parseInt(colors[0])));
    setGValue((gValue = parseInt(colors[1])));
    setBValue((bValue = parseInt(colors[2])));
    setRGB();
  }, [color]);

  function setRGB() {
    const RGB = 'RGB(' + rValue + ',' + gValue + ',' + bValue + ')';
    setRGBValue(RGB);
    setColor(RGB);
  }

  function newValue(setter, value) {
    setter(value);
    setRGB();
  }

  return (
    <div>
      <SliderMUI
        size="small"
        style={sliderStyles}
        min={0}
        max={255}
        value={rValue}
        onChange={(e) => newValue(setRValue, e.target.value)}
      />
      <br />
      <SliderMUI
        size="small"
        style={gSliderStyles}
        min={0}
        max={255}
        value={gValue}
        onChange={(e) => newValue(setGValue, e.target.value)}
      />
      <br />
      <SliderMUI
        size="small"
        style={bSliderStyles}
        min={0}
        max={255}
        value={bValue}
        onChange={(e) => newValue(setBValue, e.target.value)}
      />
      <br />
      <h1>RGB Value:</h1> <p>{RGBVAlue}</p>
    </div>
  );
}
