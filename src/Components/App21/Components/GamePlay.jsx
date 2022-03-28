import React, { useState } from 'react';
import './GamePlay.css';
let message = 'Good luck';
let disableButton = true;
let userWon = false;
let hideRetry = true;
let x = true; // becomes false after it goes through the algorithm to prevent it from going again, becomes true on button click
setTimeout(() => {
  disableButton = false;
}, 1000);
const GamePlay = () => {
  let [count, setCount] = useState(0);
  const retryHandler = () => {
    hideRetry = true;
    message = 'Good luck';
    setCount(0);
  };
  const clickHandler = (event) => {
    disableButton = true;
    x = true;
    if (count < 21) {
      setCount(parseInt(event.target.value) + count);
    }
  };
  if ((count > 20) & (x === false) & (userWon === false)) {
    message = 'Victory';
    userWon === true;
    setTimeout(() => {
      message =
        'You defeated me now it is your turn to start and you will never win';
      setCount(0);
    }, 1000);
  } else if ((count < 21) & (x === true)) {
    if ((count % 4 === 0) & (x === true) & (userWon === false)) {
      x = false;
      let compPlay = Math.floor(Math.random() * 3) + 1;
      setTimeout(() => {
        setCount((count = count + compPlay), (disableButton = false));
      }, 1000);
    } else {
      if (((count / 4 + 0.75) % 1 === 0) & (x === true)) {
        x = false;
        setTimeout(() => {
          setCount(count + 3, (disableButton = false));
        }, 1000);
      } else if (((count / 4 + 0.5) % 1 === 0) & (x === true)) {
        x = false;
        setTimeout(() => {
          setCount(count + 2, (disableButton = false));
        }, 1000);
      } else if (((count / 4 + 0.25) % 1 === 0) & (x === true)) {
        x = false;
        setTimeout(() => {
          setCount(count + 1, (disableButton = false));
        }, 1000);
      }
    }
  } else if ((count > 20) & (x === true)) {
    message = 'Loser 😭';
    hideRetry = false;
  }
  return (
    <div>
      <h5>{message}</h5>
      <h3>{count}</h3>
      <div classname="button">
        <button disabled={disableButton} value="1" onClick={clickHandler}>
          1
        </button>
        <button disabled={disableButton} value="2" onClick={clickHandler}>
          2
        </button>
        <button disabled={disableButton} value="3" onClick={clickHandler}>
          3
        </button>
        <button hidden={hideRetry} onClick={retryHandler}>
          Retry
        </button>
      </div>
    </div>
  );
};
export default GamePlay;
