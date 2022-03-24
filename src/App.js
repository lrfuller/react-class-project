import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from './Components/Navbar/Navbar';
import ColorList from './Components/ColorList/ColorList';
import TicTacToe from './Components/TicTacToe/TicTacToe';

const Routes = {
  ColorList: 'Fungii',
  TicTacToe: 'Tic Tac Toe'
};

export default function App() {
  const [route, setRoute] = useState(null);

  function setNewRoute(newRoute) {
    switch (newRoute) {
      case 'ColorList':
        return <ColorList />;
      case 'TicTacToe':
        return <TicTacToe />;
      ///  new routes
      default:
        <div />;
    }
  }

  return (
    <div>
      <Navbar setSelected={setRoute} routes={Routes} />
      {setNewRoute(route)}
    </div>
  );
}
