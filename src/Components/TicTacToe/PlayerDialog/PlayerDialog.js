import * as React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Checkbox from '@mui/material/Checkbox';
import './PlayerDialog.css';
import SvgIcon from '@mui/material/SvgIcon';

let className = "flex__center";

export default function PlayerDialog(props) {
  const { onClose, open, dataFromDialog } = props;


  function handleClose(){
    onClose();
  }

  function handleSelection(char){
    dataFromDialog(char);
    onClose();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Pick Your Character!</DialogTitle>
      <div className="centered">
        <div>
          <div className="center">
            <p>X</p>
            <Checkbox onChange={() => handleSelection('X')}/>
          </div>
          <div className="center">
            <p>O</p>
            <Checkbox onChange={() => handleSelection('O')}/>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
