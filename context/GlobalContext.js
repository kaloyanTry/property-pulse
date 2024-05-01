'use client';

import { useContext, createContext, useState } from 'react';

// Create a context:
const GloabalContext = createContext();

// Create a provider:
export function GlobalProvider({ children }) {
  const [unreadCount, setUnreadCount] = useState(0);

  return (
    <GloabalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GloabalContext.Provider>
  );
}

// Create a custom hook to access context:
export function useGlobalContext() {
  return useContext(GloabalContext);
}
