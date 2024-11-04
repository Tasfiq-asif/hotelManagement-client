import React, { createContext, useEffect, useState } from 'react'
import auth from "../firebase/firebase.config";
import {
 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

    //Social auth providers
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };


    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

     //Google Login

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };


   //observer
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);


  const authInfo = {
    user,
    createUser,
    loading,
    setUser,
    signIn,
    googleLogin,

  };



  

  return (
    <div>
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  </div>
  )
}

export default AuthProvider