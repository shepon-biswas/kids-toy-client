import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
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

  // Auth Provider Values
  const authInfo = {
    createNewUser,
    signInUser,
    updateUserData,
    googleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
