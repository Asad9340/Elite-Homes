import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from './firebase.config';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //email password login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sign in with google
  const googleLogin = () => {
    setLoading(true);
    setUser(null);
    return signInWithPopup(auth, googleProvider);
  };
  //sign in with github
  const githubLogin = () => {
    setLoading(true);
    setUser(null);
    return signInWithPopup(auth, githubProvider);
  };
  //logOut
  const logOut = () => {
    signOut(auth).then(() => {
      setUser(null);
      toast.success('Successfully Logged Out');
    });
  };

  //update profile
  const updateUserProfile = (name, profile) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: profile,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    googleLogin,
    githubLogin,
    setUser,
    user,
    createUser,
    loginUser,
    logOut,
    updateUserProfile,
    loading,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
