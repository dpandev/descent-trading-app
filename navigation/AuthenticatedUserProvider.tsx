import React, { useState, createContext } from 'react'

export const AuthenticatedUserContext = createContext({})

export const AuthenticatedUserProvider = ({ children }: any) => {
  const [theUser, setTheUser] = useState(null)

  return (
    <AuthenticatedUserContext.Provider 
      value={{ 
        theUser, 
        setTheUser, 
      }}>
      {children}
    </AuthenticatedUserContext.Provider>
  )
}