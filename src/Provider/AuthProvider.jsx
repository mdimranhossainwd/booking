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
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../Config/firebase.config";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  const handleUpdate = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "https://example.com/jane-q-user/profile.jpg",
    });
  };

  const values = {
    createUser,
    login,
    user,
    isLoading,
    logout,
    googleLogin,
    handleUpdate,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
