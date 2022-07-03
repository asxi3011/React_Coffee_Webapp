
import React,{useState,useEffect} from "react";

import { useSelector,useDispatch} from 'react-redux';

import {getPayments} from '../../../redux/selector'
import cartSlice from "./cartSlice";
export default function Payments(){
    const dispatch = useDispatch();
    const payments = useSelector(getPayments)
    return(
        <>
                 <div className="d-flex align-items-center py-3 header">
            <span className="fw-bold fs-5 pos-relative">
              Phương thức thanh toán
              <div className="line_bottom" />
            </span>
          </div>
          <div>
                <div className="form-check my-3 fs-5">
                <input className="form-check-input rad-primary" type="radio" checked={payments==='Tiền mặt'} name="radPayment" onChange={()=>dispatch(cartSlice.actions.changePayments('Tiền mặt'))}  id="radPayment"/>
                <label className="form-check-label" htmlFor="radPayment">
                <i className="fas fa-money-bill text-success" /> Tiền mặt
                </label>
                </div>
                <div className="form-check my-3 fs-5">
                <input className="form-check-input rad-primary" type="radio" checked={payments==='VNPay'} name="radPaymentVN" onChange={()=>dispatch(cartSlice.actions.changePayments('VNPay'))} id="radPaymentVN"  />
                <label className="form-check-label" htmlFor="radPaymentVN">
                <i className="fa-solid fa-wallet text-warning"/> VN Pay
                </label>
</div>
</div>       
        </>
    )
}