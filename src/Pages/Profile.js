import React from "react";
import { useState, useEffect } from "react";
import MenuProfile from "../components/Client/MenuProfile";
import InfoUser from "../components/Client/InfoUser";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {getIsNewAccount,getUser} from "../redux/selector"
import { db,authentication } from "../Firebase/config";
import cartSlice from "../components/Client/Cart/cartSlice";
import NewAccount from "../components/Client/Login/NewAccount";
import HistoryOrder from "../components/Client/HistoryOrder";
import {useGetUser} from "../hooks/useGetUser"
import usersSlice from "../components/Client/Login/usersSlice"
import Promotion from "../components/Client/Promotion"
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
export default function Profile() {
  const [selected, setSelected] = useState("profile");
  const a = useGetUser();
  const dispatch = useDispatch();
  
  
  return (
    <>
      <div className="pd-header">
        <div className="container-fluid">
          <div className="pd-y-220 section-Chapter">
            <div className="fs-3 d-flex align-items-center justify-content-center gap-2">
              <i className="fa-solid fa-user fs-4 color-primary" />
              <span className="fw-bold">Tài khoản của bạn</span>
            </div>
            <div className="row d-flex justify-content-between wrap-profile gap-120 mt-5">
              <NewAccount ></NewAccount>
              <MenuProfile selected={selected} setSelected={setSelected} />
              {selected === "profile" ? (
                <InfoUser />
              ) : selected === "history" ? (
                <HistoryOrder />
              ) : (
                <Promotion />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
