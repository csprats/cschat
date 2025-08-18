import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [messagesReloadTrigger, setMessagesReloadTrigger] = useState(0); 

  const saveUserName = (name) => {
    setUserName(name);
    console.log('Nombre de usuario guardado:', name);
  };

  const triggerMessagesReload = () => {
    setMessagesReloadTrigger(prev => prev + 1);
  };

  return (
    <UserContext.Provider value={{ userName, saveUserName, messagesReloadTrigger, triggerMessagesReload }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};