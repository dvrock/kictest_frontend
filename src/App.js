import React, { useEffect } from "react";
import SignIn from "./components/auth/SignIn";
import ErrorHandler from "./baseComponents/ErrorHandler";
import AddProduct from "./components/AddProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Ewelogistics } from "./Utilis/interceptor";
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
useEffect(()=>{
  Ewelogistics();
})
const token = useSelector((state) => state?.AuthReducer?.userData);
console.log("token===>",token);
  return (
    
    <Router>
      <Routes>
        <Route path="*" element={<ErrorHandler />} />
        <Route path="/" element={Object.keys(token).length === 0?(<SignIn/>):(<AddProduct/>)} />
        {/* <Route path="/addProduct" element={token?(<AddProduct />):(<SignIn/>)} /> */}
      </Routes>
    </Router>
    
  );
}
