import React, { useState } from 'react';
import CloseIcon from './CloseIcon';
import ColorHash from 'color-hash';
import './Form.css';

export default function Form({ title }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000');
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  let hash = new ColorHash();

  function getColor(string) {
    return hash.hex(string);
  }

  const removeValue = () => {
    setValue('');
  };

  const handleChange = ({ target }) => {
    setName(target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // check if name is not empty and length is more than 0
    if (name !== '' && name.length > 0) {
      setValue(name);
      setColor(getColor(name));
      setName('');
      setError(null);
    } else {
      setError('Please enter your name');
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name" name="name">
            <h1>{title}</h1>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </form>
      {value.length > 0 && (
        <div className="output-container">
          <button onClick={removeValue} className="btn-delete">
            <CloseIcon />
          </button>
          <h2>Your name:</h2>
          <p className="output-value" style={{ color: color }}>
            {value}
          </p>
        </div>
      )}
    </div>
  );
}
