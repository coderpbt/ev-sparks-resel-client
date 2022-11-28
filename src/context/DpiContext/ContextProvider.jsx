import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from './../../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({children}) => {

  const [user,setUser] = useState({})
  const [loading,setLoading] = useState(true)

  //google login provider
  const googleProvider = new GoogleAuthProvider();

  //login User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
//Register User
  const sigIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signInwithG = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }


//User LogOut
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  //update user profile name and picture
  const updateProfileName = profile => {
    setLoading(true)
    return updateProfile(auth.currentUser, profile)
  }


  //Current User Stage Change
  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
     setUser(currentUser)
      setLoading(false)
    })

    return () => {
      unSubscribe();
    }

  },[])

  const authInfo = {user,loading,setLoading,createUser,sigIn,logOut,signInwithG,updateProfileName}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default ContextProvider;