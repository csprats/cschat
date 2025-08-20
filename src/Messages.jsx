import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext.jsx';
import './index.css';

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { messagesReloadTrigger } = useContext(UserContext); 

  useEffect(() => {
    fetch('https://backend-server-2efm.onrender.com/api/cschat')
      .then(response => {
        if (!response.ok) {
          throw new Error('Incorrect anwser');
        }
        return response.json();
      })
      .then(data => {
        setMessages(data);
        console.log('Refresh!')
      })
      .catch(error => {
        console.error('Error obtaining data:', error);
      });
  }, [messagesReloadTrigger]);

  window.scrollTo(0, document.body.scrollHeight);

  return (
    <>
      {messages.length > 0 ? (
        messages.map((item) => (
          <p key={item.id} className='message'><b>{item.user_name}: </b>{item.message}</p>
        ))
      ) : (
        <p>Chargin messages...</p>
      )}
    </>
  );
};