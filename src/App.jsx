import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginBlocks from "./components/LoginBlocks";
import HeroSection from "./components/HeroSection";
import LogoutPage from "./components/LogoutPage";
import LoginPage from "./components/LoginPage";
import UserPage from "./components/UserPage";
import Permissions from "./components/Permissions";

import CustLogin from "./components/CustLogin";
import CustomerPage from "./components/CustomerPage";
import CusSignup from "./components/CusSignup/CusSignup";



const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          {/* Sidebar is usually placed outside of Routes */}
          <div className="content">
            <Routes>
 
              <Route path="/" element={<HeroSection />} />
              <Route path="/cusloginpage" element={<CustLogin/>} />
              <Route path="/users" element={<UserPage/>} />
              <Route path="/customer" element={<CustomerPage />} />
              <Route path="/login" element={<LoginBlocks />} />
              <Route path="/cusSignup" element={<CusSignup/>} />
              <Route path="/permissions" element={<Permissions/>} />
              <Route path="/" element={<LogoutPage />} />
              <Route path="/loginpage" element={<LoginPage />} />

            
             

            </Routes>
           


          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
