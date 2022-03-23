import React, { useState } from 'react';

export default function Navbar() {
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
      <a style={linkStyles}>Link 1</a>
      <a style={linkStyles}>Link 2</a>
      <a style={linkStyles}>Link 3</a>
    </nav>
  );
}
