import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar({ setSelected, routes }) {

  const navStyles = {
    display: 'flex',
    gridDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'aquamarine',
  };

  const linkStyles = {
    margin: '10px',
    cursor: 'pointer',
  };

  return (
    <nav style={navStyles}>
      {Object.keys(routes).map(key => <p onClick={(e) => setSelected(key)}>{routes[key]}</p>)}
    </nav>
  );
}
