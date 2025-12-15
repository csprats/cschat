import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext.jsx';

export const Sesion = () => {
  const { saveUserName } = useContext(UserContext)
  const [open, setOpen] = useState(true)
  const [inputValue, setInputValue] = useState('')
  const [inputPasswordValue, setPasswordValue] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    if (inputPasswordValue != import.meta.env.VITE_PASSWORD) return
    setOpen(false)
    saveUserName(inputValue)
    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value)
  }

  return (
    <div>
      <button onClick={handleOpen}>Enter a username</button>
      {open && (
        <div className='background'>
          <div className='card'>
            <p style={{ color: 'white' }}>Enter the correct chat password:</p>
            <input
              className='name'
              type="text"
              value={inputPasswordValue}
              onChange={handlePasswordChange}
            />
            <p style={{ color: 'white' }}>And write your name:</p>
            <input
              className='name'
              type="text"
              value={inputValue}
              onChange={handleChange}
            />
            <button onClick={handleClose}>Save</button>
          </div>
        </div>
      )}
    </div>
  )
}