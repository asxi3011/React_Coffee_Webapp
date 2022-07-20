import { React, useEffect, useState } from "react";

import { authentication } from "../Firebase/config";

import { useSelector } from "react-redux";
import Login from "../components/Client/Login";
import Profile from "../Pages/Profile";
import { getUser } from "../redux/selector";

export default function PageProfile() {
  const user = useSelector(getUser);
  
  return user ? (
    <Profile></Profile>
  ) : (
    <div className="pd-header">
      <div className="container-fluid">
        <div className="pd-w-100 section-Chapter">
          <div className="text-center fs-3">
            <i className="fas fa-newspaper fs-4 color-primary" /> Đăng nhập
          </div>

          <Login />
        </div>
      </div>
    </div>
  );
}
