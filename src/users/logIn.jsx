import React, { useContext, useRef, useEffect } from "react";
import { useLogin } from "../hooks/useLogin";
import { AppContext } from '../context/context'
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const { error, login } = useLogin();
  const { email, setEmail, uid, setUid } = useContext(AppContext);

  const mailRef = useRef();
  const passRef = useRef();

  useEffect(() => {
    const auth = getAuth();

    // Listen for changes to the user's login state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
        setUid(user.uid);
        console.log(`${uid} log in uid`)
      } else {
        // User is signed out
        setEmail(null);
        setUid(null);
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, [setEmail, setUid]);

  const onSub = (e) => {
    e.preventDefault();
    login(mailRef.current.value, passRef.current.value);
  };

  return (
    <div className="container">
      <h3 className="text-dark mt-4 mb-4">Log in to CVmaker</h3>
      <form onSubmit={onSub} className="mt-2 p-4 rounded shadow-lg bg-light">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            ref={mailRef}
            type="email"
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            ref={passRef}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>
        <h3 className="text-danger mb-3">{error}</h3>
        <button type="submit" className="btn btn-dark btn-block">
          Log in
        </button>
      </form>
    </div>
  );
}
