import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext.jsx';

export const App = () => {
  const [message, setMessage] = useState('');
  const { userName, triggerMessagesReload } = useContext(UserContext); 

  const handleInputChange = (e) => {
    setMessage(e.target.value)
  }

  const handleButtonClick = async () => {
    if (!userName) {
      alert('Please, enter a username');
      return;
    }

    try {
      const response = await fetch('https://backend-server-2efm.onrender.com/api/cschat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: userName, 
            message: message
          })
        });
        
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status} ${response.statusText}`);
        }

        triggerMessagesReload(); 
        setMessage('');
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending the messaje ):');
    }
  }

  return (
    <>
      <input type="text" id='message' value={message} onChange={handleInputChange}/>
      <br />
      <button id='add' onClick={handleButtonClick}>Add message</button>
    </>
  );
};