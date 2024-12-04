import React, { createContext } from 'react'


export const UserDataContext = createContext()


const UserContext = ({children}) => {
  return (
    <UserDataContext.Provider>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserContext
