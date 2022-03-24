import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from './Components/Navbar/Navbar';
import ColorList from './Components/ColorList/ColorList';
import ColorSlider from './Components/ColorList/Slider/ColorSlider';


const Routes = {
  ColorList: 'Fungii', 
  ColorSlider: 'Christopher',
};

export default function App() {
  const [route, setRoute] = useState(null);

  function setNewRoute(newRoute) {
    switch (newRoute) {
      case 'ColorList':
        return <ColorList />;
          ///  new routes
      case 'ColorSlider':
        return <ColorSlider />
    
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