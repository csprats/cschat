import './index.css';
import React, { useState } from 'react';

export const App = () => {

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const handleButtonClick = async () => {
    const response = await fetch('/.netlify/functions/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      });
      
      if (!response.ok) {
        throw new Error(`Red error: ${response.status} ${response.statusText}`);
      }

      document.location.reload()
  }

  return (
    <>
      <input type="text" id='message' value={message} onChange={handleInputChange}/>
      <br />
      <button id='add' onClick={handleButtonClick}>Add message</button>
    </>
  );
};