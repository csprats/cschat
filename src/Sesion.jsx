import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext.jsx';

export const Sesion = () => {
  const { saveUserName } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    saveUserName(inputValue);
    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <button onClick={handleOpen}>Enter a username</button>
      {open && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'black',
            padding: '20px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            height: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <p style={{ color: 'white' }}>Write your name:</p>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              style={{ width: '200px', margin: '10px 0' }}
            />
            <button onClick={handleClose}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}