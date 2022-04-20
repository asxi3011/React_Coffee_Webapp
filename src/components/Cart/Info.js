import React,{useState,useEffect} from "react";

import { useSelector,useDispatch} from 'react-redux';

import {getName,getEmail,getPhone,getAddress,getNote} from '../../redux/selector'
import cartSlice from "./cartSlice";
import modalSlice from '../modalSlice'
import Payments from "./Payments";
export default function Info(){
    const dispatch = useDispatch()
    const name = useSelector(getName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const address= useSelector(getAddress);
  const note = useSelector(getNote);
    return(
        <div className="col-6">
        <div className="pd-12">
        <div className="d-flex align-items-center py-3 header">
            <span className="fw-bold fs-5">
              Giao hàng
              <img className="img-min" src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png" alt="" />
            </span>
          </div>
          <div>
              <div className="line_bottom" />
                    <input type="text" value={email} onChange={(e)=>{dispatch(cartSlice.actions.setEmail(e.target.value))}} name="emailCus" className="form-control input-text-address" placeholder="Email" required />
                    <input type="text" value={address} onChange={(e)=>{dispatch(cartSlice.actions.setAddress(e.target.value))}} name="addressCus" className="form-control input-text-address" placeholder="Địa chỉ" required />
                    <input type="text" value={name} onChange={(e)=>dispatch(cartSlice.actions.setNameCustomer(e.target.value))}name="nameCus" className="form-control input-text-address" placeholder="Tên người nhận" required />
                    <input type="text" value={phone} onChange={(e)=>dispatch(cartSlice.actions.setPhone(e.target.value))}name="numberCus" className="form-control input-text-address" placeholder="Số điện thoại" required />
                    <input type="text" value={note} onChange={(e)=>dispatch(cartSlice.actions.setNote(e.target.value))} name="noteCus" className="form-control input-text-address" placeholder="Thêm hướng dẫn giao hàng" />
            </div>
            <Payments/>
         
        </div>
      </div>
    )
}