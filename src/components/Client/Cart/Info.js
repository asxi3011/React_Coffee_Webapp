import React, { useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  getName,
  getEmail,
  getPhone,
  getAddress,
  getNote,
  getTokenAhamove,getUser
} from "../../../redux/selector";
import cartSlice from "./cartSlice";
import { getShipFee } from "../../../redux/callApi";
import Payments from "./Payments";
import { useState, useEffect } from "react";
import { useUser } from "../../../hooks/useUser";

export default function Info() {
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const address = useSelector(getAddress);
  const note = useSelector(getNote);
  const user = useSelector(getUser);
  const tokenAhamove = useSelector(getTokenAhamove);
  
  const [isAcceptAddress, setAcceptAddress] = useState(true);
  const handleAddress = useCallback(() => {
    
    const shipFee = getShipFee(tokenAhamove, address, name, phone, note);
    shipFee
      .then((result) => {
        console.log("shipfee", result);
        dispatch(cartSlice.actions.changePriceShip(result.data.total_price));
        setAcceptAddress(true);
      })
      .catch((err) => {
        switch (err.response.status) {
          case 406:
            alert("Địa chỉ không hợp lệ");
            setAcceptAddress(false);
            dispatch(cartSlice.actions.changePriceShip(0));
            return;
          default:
            return;
        }
      });
  }, [tokenAhamove, address, name, phone, note, dispatch]);
  // useEffect(() => {
  //   handleAddress();
  // }, [handleAddress]);
  return (
    <div className="col-lg-6 col-md-12">
      <div className="pd-12">
        <div className="d-flex align-items-center justify-content-between py-3 header">
          <span className="fw-bold fs-5 pe-cursor pos-relative">
            Giao hàng
            <img
              className="img-min"
              src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
              alt=""
            />
            <div className="line_bottom" />
          </span>
          <span className="fw-bold fs-5 pe-cursor">Lấy hàng</span>
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between "></div>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              dispatch(cartSlice.actions.setEmail(e.target.value));
            }}
            name="emailCus"
            className="form-control input-text-address"
            placeholder="Email"
            required
          />
          <input
            id="inputAddress"
            className={
              isAcceptAddress
                ? "form-control input-text-address"
                : "form-control input-text-address border-1 text-danger border-danger"
            }
            type="text"
            value={address}
            onChange={(e) => {
              dispatch(cartSlice.actions.setAddress(e.target.value));
            }}
            onBlur={handleAddress}
            name="addressCus"
            placeholder="Địa chỉ"
            required
          />
          <input
            type="text"
            value={name}
            onChange={(e) =>
              dispatch(cartSlice.actions.setNameCustomer(e.target.value))
            }
            name="nameCus"
            className="form-control input-text-address"
            placeholder="Tên người nhận"
            required
          />
          <input
            type="text"
            value={phone}
            onChange={(e) =>
              dispatch(cartSlice.actions.setPhone(e.target.value))
            }
            name="numberCus"
            className="form-control input-text-address"
            placeholder="Số điện thoại"
            required
          />
          <input
            type="text"
            value={note}
            onChange={(e) =>
              dispatch(cartSlice.actions.setNote(e.target.value))
            }
            name="noteCus"
            className="form-control input-text-address"
            placeholder="Thêm hướng dẫn giao hàng"
          />
        </div>
        <Payments />
      </div>
    </div>
  );
}
