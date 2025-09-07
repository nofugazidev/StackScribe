/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "../../utils/firebase";

interface AuthContextType {
  user: User | null;
  register: (fullName: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //registering a user
  const register = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  // logging in a user
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password)
  }
  // logout a user
  const logout = async() => {
    await signOut(auth)
  }
  // track a user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged((auth), (currentUser)=> {
      setUser(currentUser);
      setLoading(false)
    })

    return unsubscribed
  },[])


  return (
    <AuthContext.Provider value={{user, login, logout, register}}>
      {!loading &&  children}
    </AuthContext.Provider>
  )
}

