import React, { useState, useEffect } from 'react'
import './index.css'

export const Messages = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('/.netlify/functions/api')
      .then(response => {
        if (!response.ok) {
          throw new Error('The response are incorrect')
        }
        return response.json()
      })
      .then(data => {
        setMessages(data)
      })
      .catch(error => {
        console.error('Error obtainin data:', error)
      })
  }, [])

  window.scrollTo(0, document.body.scrollHeight)

  return (
    <>
      {messages.length > 0 ? (
        messages.map((item) => (
          <p key={item.id}>{item.message}</p>
        ))
      ) : (
        <p>Chargin messages...</p>
      )}
    </>
  )
}