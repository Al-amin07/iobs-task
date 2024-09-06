import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
export const AuthContext = createContext(null);
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

import axios from "axios";
import useAxiosCommon from "../hooks/useAxiosCommon ";
import { useQuery } from "@tanstack/react-query";
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign Up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign up with google
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // Sign in
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = async () => {
    setLoading(true);
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true,
    });
    return signOut(auth);
  };

  // Update User
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Get Token
  const getToken = async (email) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/jwt`,
      { email },
      { withCredentials: true }
    );
    return data;
  };

  // Get Chairs
  const axiosCommon = useAxiosCommon()
  const { data : chairs = [], isLoading } = useQuery({
    queryKey: ['chairs'],
    queryFn: async () => {
        const { data } = await axiosCommon.get('/chairs');
        console.log(data)
        return data
    }
  })


  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setLoading(false);
      setUser(currentUser);
      if (currentUser) {
      
        getToken(currentUser?.email);
      }
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    login,
    updateUserProfile,
    logOut,
    signInWithGoogle,
    user,
    loading,
    isLoading,
    chairs
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element
}

export default AuthProvider;
