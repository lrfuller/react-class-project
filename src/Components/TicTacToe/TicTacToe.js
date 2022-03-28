import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import './TicTacToe.css';
import PlayerDialog from './PlayerDialog/PlayerDialog';
import SvgIcon from '@mui/material/SvgIcon';

let huPlayer = "O";
let aiPlayer = "X";
let className = "flex__center";

function X(props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.22676 4.22676C4.5291 3.92441 5.01929 3.92441 5.32163 4.22676L12 10.9051L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0949 12L19.7732 18.6784C20.0756 18.9807 20.0756 19.4709 19.7732 19.7732C19.4709 20.0756 18.9807 20.0756 18.6784 19.7732L12 13.0949L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9051 12L4.22676 5.32163C3.92441 5.01929 3.92441 4.5291 4.22676 4.22676Z" fill="#030D45"/>
    </SvgIcon>
  )
}

function O(props) {
  return (
    <SvgIcon {...props}>
      <path fill="var(--ci-primary-color, currentColor)" d="M256.6,496A239.364,239.364,0,0,0,425.856,87.379,239.364,239.364,0,0,0,87.344,425.892,237.8,237.8,0,0,0,256.6,496Zm0-446.729c114.341,0,207.365,93.023,207.365,207.364S370.941,464,256.6,464,49.236,370.977,49.236,256.635,142.259,49.271,256.6,49.271Z" class="ci-primary"/>
    </SvgIcon>
  )
}

PlayerDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.func.isRequired
};

export default function TicTacToe() {
  const [board, setBoard] = useState({gameboard: [0,1,2,3,4,5,6,7,8]});
  const [turn, setTurn] = useState(0); // 0 -> player 1, 1 -> ai
  const [players, setPlayers] = useState([null,null]);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(true);

  // save game record to localStorage
  function emptyIndexies() {
    return board.gameboard.filter(s => s != "0" && s != "X");
  }

  // pass in players[turn] when calling, i.e. winning(players[turn])
  function winning(player) {
    if (
      (board.gameboard[0] == player && board.gameboard[1] == player && board.gameboard[2] == player) ||
      (board.gameboard[3] == player && board.gameboard[4] == player && board.gameboard[5] == player) ||
      (board.gameboard[6] == player && board.gameboard[7] == player && board.gameboard[8] == player) ||
      (board.gameboard[0] == player && board.gameboard[3] == player && board.gameboard[6] == player) ||
      (board.gameboard[1] == player && board.gameboard[4] == player && board.gameboard[7] == player) ||
      (board.gameboard[2] == player && board.gameboard[5] == player && board.gameboard[8] == player) ||
      (board.gameboard[0] == player && board.gameboard[4] == player && board.gameboard[8] == player) ||
      (board.gameboard[2] == player && board.gameboard[4] == player && board.gameboard[6] == player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  // minimax algo.
  function minimax(newBoard, player) {
    let availSpots = emptyIndexies(newBoard);

    if (availSpots.length === 0){
      return {score: 0};
    }  else if (winning(newBoard, huPlayer)){
      return {score: -10};
    } else if (winning(newBoard, aiPlayer)){
      return {score: 10};
    }

    var moves = [];

    for (var i = 0; i < availSpots.length; i++){
      var move = {};
      move.index = newBoard[availSpots[i]];
      newBoard[availSpots[i]] = player;

      if (player == aiPlayer){
        var result = minimax(newBoard, huPlayer);
        move.score = result.score;
      } else {
        var result = minimax(newBoars, aiPlayer);
        move.score = result.score;
      }

      newBoard[availSpots[i]] = move.index;

      moves.push(move);
    }

    var bestMove;
    if (player === aiPlayer){
      var bestScore = -10000;
      for (var i = 0; i < moves.length; i++){
        if (moves[i].score > bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }else{
      var bestScore = 10000;
      for (var i = 0; i < moves.length; i++){
        if (moves[i].score < bestScore){
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }

    return moves[bestMove];
  }

  function setPlayerCharacter(char) {
    if (char == 'X'){
      setPlayers(['X', 'O']);
    } else {
      setPlayers(['O', 'X']);
    }
    className += ' hide';
  }

  function handleMove(e) {
    console.log(e);
  }

  function handleListItemClick(email){
    console.log(email);
  }

  function handleClose(value){
    setOpen(false);
  }

  return (
    <div>
      <div className="flex__center">
        <PlayerDialog
          open={open}
          onClose={handleClose}/>
        <div>
          <h2 className="centered"> Play Tic Tac Toe </h2>
          <p className="centered">Player {turn+1}'s turn </p>
          <div className="board-container">
            <div className="board">
              {board.gameboard.map((spot) => (
                <div className="board-spot" onClick={handleMove}>
                  <X sx={{ width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
