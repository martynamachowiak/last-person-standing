import React from "react";
import Fixtures from "./Fixtures";
import "../App.css";
import Login from "./Login";
import Register from "./Register";
import MemberArea from "./MembersArea";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      Last Person Standing
      <Login />
      <Register />
      <MemberArea />
      <Fixtures />
    </>
  );
}

export default App;
