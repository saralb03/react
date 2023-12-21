import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AppContext } from "../context/context";
import Signup from "../users/sighUp";
import Login from "../users/logIn";
import LogOut from "../users/logOut";
import ResumeApp from "../resumes/resumeApp";
import Img from "../resumes/img";
import ResumeList from "../resumes/resumeList";

export default function AppRoutes() {
  const [email, setEmail] = useState();
  const [uid, setUid] = useState();
  const [resumeAr, setResumeAr] = useState([]);


  useEffect(() => {
    // Perform actions when email changes
    console.log(`Email changed: ${email}`);
    // Add any specific actions you want to perform
  }, [email]);

  useEffect(() => {
    // Perform actions when email changes
    console.log(`resumeAr changed: ${resumeAr}`);
    // Add any specific actions you want to perform
  }, [resumeAr]);

  useEffect(() => {
    // Perform actions when uid changes
    console.log(`UID changed: ${uid}`);
    // Add any specific actions you want to perform
  }, [uid]);
  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          email,
          setEmail,
          uid,
          setUid,
          resumeAr,
          setResumeAr
        }}
      >
        <header className="p-2 pl-1 container-fluid bg-dark text-light fixed-top w-100">
          <div className="container d-flex justify-content-between align-items-center">
            <h2 className="m-0">CVmaker</h2>
            <div>
              <Link
                to="/resumeApp"
                className="text-light text-decoration-none mx-2"
              >
                Resume
              </Link>
              <Link
                to="/signup"
                className="text-light text-decoration-none mx-3"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-light text-decoration-none mx-3"
              >
                Log In
              </Link>
              <Link
                to="/logout"
                className="text-light text-decoration-none mx-2"
              >
                Log Out
              </Link>
              <Link to="/img" className="text-light text-decoration-none mx-2">
                img
              </Link>

              <Link to="/list" className="text-light text-decoration-none mx-2">
                list
              </Link>
            </div>
          </div>
        </header>
        <Routes>
          <Route index path="/signup" element={<Signup />} />
          <Route index path="/resumeApp" element={<ResumeApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogOut />} />
          <Route path="/img" element={<Img />} />
          <Route path="/list" element={<ResumeList />} />

        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}
