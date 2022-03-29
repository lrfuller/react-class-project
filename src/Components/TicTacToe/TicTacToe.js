import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import './TicTacToe.css';
import PlayerDialog from './PlayerDialog/PlayerDialog';
import SvgIcon from '@mui/material/SvgIcon';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

PlayerDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default function TicTacToe() {
  // game state
  const [board, setBoard] = useState({gameboard: [0,1,2,3,4,5,6,7,8]});
  const [turn, setTurn] = useState(0); // 0 -> player 1, 1 -> ai
  const [round, setRound] = useState(0);

  // character selection
  const [players, setPlayers] = useState([null,null]);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    console.log("gameboard: " + board.gameboard);
    console.log("current round: " + round);
    console.log("current turn: " + turn);
  })

  function X(props) {
    return (
      <SvgIcon {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M4.22676 4.22676C4.5291 3.92441 5.01929 3.92441 5.32163 4.22676L12 10.9051L18.6784 4.22676C18.9807 3.92441 19.4709 3.92441 19.7732 4.22676C20.0756 4.5291 20.0756 5.01929 19.7732 5.32163L13.0949 12L19.7732 18.6784C20.0756 18.9807 20.0756 19.4709 19.7732 19.7732C19.4709 20.0756 18.9807 20.0756 18.6784 19.7732L12 13.0949L5.32163 19.7732C5.01929 20.0756 4.5291 20.0756 4.22676 19.7732C3.92441 19.4709 3.92441 18.9807 4.22676 18.6784L10.9051 12L4.22676 5.32163C3.92441 5.01929 3.92441 4.5291 4.22676 4.22676Z" fill="#030D45"/>
      </SvgIcon>
    )
  }

  function O(props) {
    return (
      <CircleOutlinedIcon/>
    )
  }

  function emptyIndecies() {
    return board.gameboard.filter(s => s != "O" && s != "X");
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

  // minimax algo. huPlayer = players[0], aiPlayer = players[1]
  function minimax(targetBoard, player){
    let newBoard = targetBoard;
    let availSpots = emptyIndecies();

    // base cases: if no spots available on this path, return score: 0
    if (availSpots.length === 0){
      return {score: 0};
    }  else if (winning(players[0])){ // if the human player wins at the end of this path, return score: -10
      return {score: -10};
    } else if (winning(players[1])){ // if the ai player wins, return score: 10
      return {score: 10};
    }

    var moves = [];
    for (var i = 0; i < availSpots.length; i++){
      var move = {};
      move.index = newBoard[availSpots[i]];
      newBoard[availSpots[i]] = player;

      if (player == players[1]){
        var result = minimax(newBoard, players[0]);
        move.score = result.score;
      } else {
        var result = minimax(newBoard, players[1]);
        move.score = result.score;
      }

      newBoard[availSpots[i]] = move.index;
      moves.push(move);
    }

    var bestMove;
    if (player === players[1]){
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

  // only respond if board space is available, i.e. != 'O' or 'X'
  function handleMove(index, player) {
    console.log("index: " + index, "player: " + player);
    let newRound = round + 1;
    let currentBoard = board.gameboard

    if (board.gameboard[index] != 'O' && board.gameboard[index] != 'X'){
      currentBoard[index] = players[0];
      let updatedBoard = currentBoard;
      setBoard({gameboard: updatedBoard});

      // check if human player won
      if(winning(players[0])) {
        setTimeout(function() {
          alert("Victory");
          reset();
        }, 500);
        return;
      } // check for stalemate
      else if (round > 7) {
        setTimeout(function() {
          alert("Evenly matched");
          reset();
        }, 500);
        return;
      }
      setRound(newRound);
    }
  }

  function handleAiMove() {
    console.log("AI's move");

    let newRound = round + 1;
    let currentBoard = board.gameboard;
    let index = minimax(currentBoard, players[1]).index;
    currentBoard[index] = players[1];
    let updatedBoard = currentBoard;
    setBoard({gameboard: updatedBoard});

    if(winning(players[1])) {
      setTimeout(function() {
        alert("Defeat");
        reset();
      }, 500);
      return;
    }

    console.log("AI finished it's move");
    setRound(newRound);
  }

  function setPlayerCharacter(char) {
    char == 'X' ? setPlayers(['X', 'O']) : setPlayers(['O', 'X']);
  }

  function getCharacterSelection(char){
    setPlayerCharacter(char);
  }

  function handleClose(){
    setOpen(false);
  }

  function reset() {
    setBoard({gameboard: [0,1,2,3,4,5,6,7,8]});
    setRound(0);
    setTurn(0);
  }

  return (
    <Box className="no-padding">
      <Container>
        <PlayerDialog
          onClose={handleClose}
          open={open}
          dataFromDialog={getCharacterSelection}/>
        <Box sx={{ width: "300px", height: "300px", margin: "0 auto" }}>
          <h2 className="align-center title"> Tic Tac Toe </h2>
          <Grid container spacing={0} className="no-padding">
            {board.gameboard.map((spot, index) => (
              <Grid item xs={4} className="no-padding">
                <Box sx={{
                  width: "100px",
                  height: "100px",
                  background: "rgba(0,0,0,0)",
                  border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center" }} onClick={() => {handleMove(index, players[turn]); handleAiMove()}}
                  className="no-padding">
                  {(board.gameboard[index] == 'X') && <X sx={{ width: "24px", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }}/>}
                  {(board.gameboard[index] == 'O') && <O/>}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
