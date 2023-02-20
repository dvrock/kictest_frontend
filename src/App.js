import React from "react";
import SignIn from "./components/auth/SignIn";
import ErrorHandler from "./baseComponents/ErrorHandler";
import AddCar from "./components/AddCar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element={<ErrorHandler />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/AddCar" element={localStorage.getItem("token")?(<AddCar />):(<SignIn/>)} />
      </Routes>
    </Router>
  );
}
