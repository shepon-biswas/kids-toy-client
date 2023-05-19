import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

  // Create a new user with email & password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in User with email & Password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

  // Update User Profile
  const updateUserData = (user, name, photo) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  //signIn with Google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  
  // logout
const logOut = () =>{
    return signOut(auth);
}

useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser);
    })
    return () =>{
        unsubscribe();
    }
}, [])

  // Auth Provider Values
  const authInfo = {
    user,
    createNewUser,
    signInUser,
    updateUserData,
    googleSignIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
