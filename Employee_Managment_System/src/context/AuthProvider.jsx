import React, { createContext, useEffect, useState } from 'react'
import { getLocalstorage, setLocalstorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
      setLocalstorage();
        const {employees, admin} = getLocalstorage();
    setUserData({employees, admin})
    }, [])

    // const data = getLocalstorage();
    // console.log(data.employees);
    

  return (
    <div>
       <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
