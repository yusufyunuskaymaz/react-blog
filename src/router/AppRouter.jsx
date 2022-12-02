import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login/Login";
import RegisterUser from "../pages/Register/RegisterUser";
import { UserContext } from "../context/UserContextProvider";
import { userObserver } from "../auth/firebase";
import Settings from "../pages/Settings/Settings";
import Profile from "../pages/Profile/Profile";
import AddPost from "../pages/AddPost/AddPost";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="register-user" element={<RegisterUser />} />
        <Route path="login" element={<Login />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />} />
        </Route>
        <Route path="add-post" element={<PrivateRouter />}>
          <Route path="" element={<AddPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
