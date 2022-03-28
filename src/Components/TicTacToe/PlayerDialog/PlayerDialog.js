import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import './PlayerDialog.css';

let className = "flex__center";

export default function PlayerDialog(props) {
  const { onClose, open } = props;

  function handleClose(){
    onClose(selectValue);
  }

  function handleSelection(value){
    onClose(value);
  }

  return (
    <Dialog onClose={()=> handleMove()} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <div className="centered">
        <h3 className="centered">Pick your character!</h3>
        <div className={className}>
          <div>X<Checkbox onChange={() => setPlayerCharacter('X')}/></div>
          <div>O<Checkbox onChange={() => setPlayerCharacter('O')}/></div>
        </div>
      </div>
    </Dialog>
  );
}
