import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase.config";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  //create user
  const createUser = (email,password) => {
   return createUserWithEmailAndPassword(auth,email,password)
  }
  //sign in with google
  const googleLogin = () => {
    signInWithPopup(auth,googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setUser(currentUser);
    })

    return ()=> unsubscribe();
  },[user])

  const userInfo = {
    googleLogin,
    setUser,
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;