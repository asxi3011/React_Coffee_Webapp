
import React from "react";
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react';
import { useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { io } from "socket.io-client";
import Voices from './Voices'
import Info from './Info'
import cartSlice from '../Cart/cartSlice'
import {getPriceCoupon,getPriceTotal,getPriceAll,getCoupon,getCart,getName,getEmail,getPhone,getAddress,getNote,getPayments} from '../../redux/selector'
function Cart(){
  
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const address= useSelector(getAddress);
  const note = useSelector(getNote);
  const priceCoupon = useSelector(getPriceCoupon);
  const coupon = useSelector(getCoupon);
  const priceTotal = useSelector(getPriceTotal);
  const priceAll = useSelector(getPriceAll);
  const carts = useSelector(getCart);
  const payments = useSelector(getPayments);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function clearCart() {
    sessionStorage.removeItem("arrayCart");
    sessionStorage.removeItem("countQuanity");
}
  const validateCheckEmpty = (value)=>{
      return value.trim() !== "";
  }
  const validateInput = (iname,iadress,iphone,iemail)=>{
    return validateEmail(iemail) && validateCheckEmpty(iname) && validateCheckEmpty(iphone) && validateCheckEmpty(iadress);
  }
  const redirectOnline=()=>{
    
    if(validateInput(name,address,phone,email)){
      localStorage.setItem('nameCus',name) 
      localStorage.setItem('emailCus',email) 
      localStorage.setItem('phoneCus',phone) 
      localStorage.setItem('addressCus',address) 
      localStorage.setItem('noteCus',note) 
      if(payments==="VNPay"){
        axios.post('https://sever-coffeehouse.herokuapp.com/create_payment_url', {
            priceTotal:priceTotal,
        })
        .then(function (responseCode) {
           console.log(responseCode)
        })
    }
    else{
      axios.post('https://sever-coffeehouse.herokuapp.com/order', {
        noteOrder: note,
        hotenOrder: name,
        emailOrder:email,
        sdtOrder: phone,
        addressOrder: address,
        priceCharge: 30000,
        priceCoupon: priceCoupon,
        nameCoupon: coupon,
        priceTotal: priceTotal,
        priceAll : priceAll,
        listProductOrder: carts,
        payment: payments,
    })
    .then(function (response) {
        clearCart();
        var idOrder = response.data.idOrder;
        const socket = io("https://sever-coffeehouse.herokuapp.com", { transports : ['websocket'] });
        socket.emit("don-hang-moi", response.data);
        axios.post('https://sever-coffeehouse.herokuapp.com/sendMail', {
            mail: email,
            address: address,
            priceTotal: priceAll,
            name: name,
            idOrder: idOrder,
        })
        .then(function (responseMail) {
        //  setLoading(false);
        alert("Đặt hàng thành công ! Quý khách vui lòng kiểm tra email để biết được id đơn hàng và tra cứu thông tin !")
            localStorage.removeItem('arrayCart');
            localStorage.removeItem('countQuanity');
            dispatch(cartSlice.actions.updateCart([]));
            navigate("/");


        })
    
    })
    .catch(function (error) {
        console.log(error);
    });
    }
   
    }
    else{
    
    alert("Vui long nhập email và thông tin không được để trống")
    }
    
  }
 

  
  return (  
    <div className="pd-header">
      <div className="container">
        <div className="name2">
          <div className="mt-5 text-center fs-4">
            <i className="fas fa-file text-warning" />
            <span className="fw-bold">
              Xác nhận đơn hàng
            </span>
          </div>
              <div className="row my-5">
                <Info/>
                <div className="col-6">
                  
                    <div className="bd-cart">
      <div>
          <Voices redirectOnline={redirectOnline}/>
          <div >
                      
                      <div className="bg-getAll py-3">
                        
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="text-white">
                              <div>Thành tiền</div>
                              <div id="price_total_with_charge_show" className="fw-bold" >{priceAll.toLocaleString("vi-VN",{style:"currency", currency:"VND"})}</div>
                              <input id="price_total_with_charge" name="priceTotal" className="fw-bold" hidden />
                            </div>
                            <button onClick={()=>{/*setLoading(true);*/redirectOnline()}} className="btn btn-light color-primary">
                              Đặt hàng
                            </button>
                          </div>
                    
                      </div>
                   </div>
      </div>
      </div>
                   
                </div>
              </div>
            </div>
          </div>
         
    </div>
  )
}

export default Cart;
