import React, { useState } from 'react';
import Slider from '@mui/material/Slider';

export function getRandomColor() {
  return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
}

export default function ContinuousSlider1() {
  const [value, setValue] = useState(null);
  const [color, setColor] = useState(null);
  const style = {
    color: color,
  };

  function getValue(input) {
    const newValue = input.target.value;
    setValue(newValue);
    setColor(getRandomColor());
  }

  return (
    <div style={style}>
      <Slider
        onChange={getValue}
        aria-label="Small steps"
        step={1}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
      />
      <h1>{value}</h1>
    </div>
  );
}