import React, { useState } from "react";
import AppRoutes from "./comps_routs/appRouts.jsx";
import "./App.css";
import ResumeApp from "./resumes/resumeApp.jsx";
import Signup from "./users/sighUp.jsx";
import Login from "./users/logIn.jsx";
import LogOut from "./users/logOut.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      {/* <ResumeApp/> */}
      <AppRoutes/>
      {/* <h3>sigh up</h3>
      <Signup />
      <h3>log in</h3>
      <Login />
      <h3>log out</h3>
      <LogOut/> */}
    </React.Fragment>
  );
}

export default App;
