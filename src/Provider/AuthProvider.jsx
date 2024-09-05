import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import auth from "../firebase/firebase.config";
const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setLoading(false)
      setUser(currentUser)
    })

    return () => {
      return unSubscribe()
    }
  }, [])

  const authInfo = { createUser, login };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
