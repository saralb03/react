import { useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const login = async (email, password) => {
    try {
      setError(null);
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in:", res.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, login };
};
