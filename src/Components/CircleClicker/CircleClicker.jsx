import React from 'react';

export default function CircleClicker() {
  function draw() {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.beginPath();
    ctx.arc(
      getRandomInt(0, 200),
      getRandomInt(0, 100),
      getRandomInt(0, 50),
      0,
      2 * Math.PI
    );
    ctx.strokeStyle = getRandomColor();
    ctx.stroke();
  }

  function erase() {
    let c = document.getElementById('myCanvas');
    let ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
  }

  function getRandomColor() {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0');
  }

  return (
    <div>
      <canvas id="myCanvas" width="200" height="100"></canvas>
      <br />
      <button onClick={draw}>O</button> <button onClick={erase}> X </button>
    </div>
  );
}
