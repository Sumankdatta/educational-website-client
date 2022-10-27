import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase.init';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';


export const AuthContext=createContext()
const auth=getAuth(app)


const AuthProvider = ({children}) => {
    const [user,setUser]=useState({});

    const providerLogIn=(provider)=>{
        return signInWithPopup(auth,provider)
    };

    const logOut=()=>{
        return signOut(auth)
     }

     const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
       }

       const userLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
       }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
                 setUser(currentUser)
             })
             return ()=>{
                 unSubscribe()
             }
         },[])

    const authInfo={user,providerLogIn,logOut,createUser,userLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;