import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from './Components/Navbar/Navbar';
import ColorList from './Components/ColorList/ColorList';
import Names from './Components/Names/Names';
import ColorSlider from './Components/ColorList/Slider/ColorSlider';
import ColorBox from './Components/ColorBox/ColorBox';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import CircleClicker from './Components/CircleClicker/CircleClicker.jsx';
import NameForm from './Components/NameForm/Form'
import App21 from "./Components/App21/App21";

//DCM(1a) -+ import {ColorList, ColorBox} from './Components/ComponentImportList';
//DCM(1b) -- The Code in comment 1a is an alternative way of importing all component pieces in fewer lines of code using the file ComponentImportList.js.

const Routes = {
  TicTacToe: 'Tic Tac Toe',
  ColorList: 'Fungii',
  Names: 'Jili',
  DakotaPage: 'Dakota',
  ColorBox: 'Damian',
  ColorSlider: 'Christopher',
  CircleClicker: 'Dan',
  NameForm: 'Anthony',
  JacobApp21: "JacobApp21",
};

export default function App() {
  const [route, setRoute] = useState(null);

  function setNewRoute(newRoute) {
    switch (newRoute) {
      case "ColorList":
        return <ColorList />;
      case "Names":
        return <Names />;
      case "ColorSlider":
        return <ColorSlider />;
      case "TicTacToe":
        return <TicTacToe />;
      case "ColorBox":
        return <ColorBox />;
      case "DakotaPage":
        return <DakotaPage />;
      case "JacobApp21":
        return <App21 />;
      case 'CircleClicker':
        return <CircleClicker/>;
      case 'NameForm':
        return <NameForm title='Yay React!' />;
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
