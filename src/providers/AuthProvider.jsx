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
    const [loading, setLoading] = useState(true);

  // Create a new user with email & password
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in User with email & Password
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}

  // Update User Profile
  const updateUserData = (user, name, photo) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: photo,
    });
  };

  //signIn with Google
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  
  // logout
const logOut = () =>{
  setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, loggedUser =>{
        setUser(loggedUser);
        setLoading(false);
    })
    return () =>{
        unsubscribe();
    }
}, [])

  // Auth Provider Values
  const authInfo = {
    user,
    loading,
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
