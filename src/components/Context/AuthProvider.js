import React,{useEffect,useState} from 'react'

import {useNavigate} from 'react-router-dom'

import {authentication} from '../../Firebase/config'
export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const navigate = useNavigate();
    const [user,setUser] = useState();
   
    useEffect(()=>{
        const unsubrice= authentication.onAuthStateChanged((user)=>{
        
            if(user){
                console.log("chay5");
                const {displayName,email,uid,photoURL,phoneNumber} = user;
                setUser({
                    displayName,email,uid,photoURL
                });
                
            }
          
        })
        return()=>{
            unsubrice();
        }
    },[navigate])
  return (
      <AuthContext.Provider value={user}>
          {children}
      </AuthContext.Provider>
  )
}
