import React, { useState } from 'react';
import './TicTacToe.css';

let emptyBoard = Array.apply('', Array(9));

export default function TicTacToe() {
  const [board, setBoard] = useState(emptyBoard);
  const [mode, setMode] = useState('Single'); // 'Single', '2 Player'
  const [turn, setTurn] = useState(0); // 0 -> player 1, 1 -> player 2

  // save game record to localStorage

  function handleMove(e) {
    console.log(e);
  }

  return (
    <div>
      <h2 className="centered"> Play Tic Tac Toe </h2>
      <p className="centered">Player {turn+1}'s turn </p>
      <div className="board-container">
        <div className="board">
          {board.map((spot) => (
            <div className="board-spot" onClick={handleMove}></div>
          ))}
        </div>
      </div>

    </div>
  )
}
