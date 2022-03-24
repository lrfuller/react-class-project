import React from 'react';


export default function Sidebar({ all, itemClicked }) {
  
  const sidebarStyles = {
    width: '15%',
    height: '100%',
    position: 'absolute',
    backgroundColor: 'lightBlue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '15px',
  };

  return (
    <ul style={sidebarStyles}>
      {all.map((item) => (
        <li
          style={item.style}
          key={item.index}
          onClick={(e) =>
            itemClicked(e, item.text, item.style.color, item.index)
          }
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}
