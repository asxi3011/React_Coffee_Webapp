
import React from "react";
import { useNavigate } from "react-router-dom"
import { useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import { io } from "socket.io-client";
import Voices from '../components/Cart/Voices'
import Info from '../components/Cart/Info'
import cartSlice from '../components/Cart/cartSlice'
import ThongBao from '../components/Partials/ThongBao'
import modalSlice from '../components/Modal/modalSlice'
import {createOrder} from '../redux/callApi'
import {getTokenAhamove,getPriceCoupon,getPriceShip,getPriceTotal,getPriceAll,getCoupon,getCart,getName,getEmail,getPhone,getAddress,getNote,getPayments} from '../redux/selector'
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
  const priceShip = useSelector(getPriceShip);
  const tokenAhamove = useSelector(getTokenAhamove);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function clearCart() {
    localStorage.removeItem('arrayCart');
    localStorage.removeItem('countQuanity');
}
  const validateCheckEmpty = (value)=>{
      return value.trim() !== "";
  }
  const validateInput = (iname,iadress,iphone,iemail)=>{
    return validateEmail(iemail) && validateCheckEmpty(iname) && validateCheckEmpty(iphone) && validateCheckEmpty(iadress);
  }
  const redirectOnline=()=>{
    if(validateInput(name,address,phone,email)){
      dispatch(modalSlice.actions.toggleLoading())
      localStorage.setItem('nameCus',name) 
      localStorage.setItem('emailCus',email) 
      localStorage.setItem('phoneCus',phone) 
      localStorage.setItem('addressCus',address) 
      localStorage.setItem('noteCus',note) 
      axios.post('https://sever-coffeehouse.herokuapp.com/order', {
        noteOrder: note,
        hotenOrder: name,
        emailOrder:email,
        sdtOrder: phone,
        addressOrder: address,
        priceCharge: priceShip,
        priceCoupon: priceCoupon,
        nameCoupon: coupon,
        priceTotal: priceTotal,
        priceAll : priceAll,
        listProductOrder: carts,
        payment: payments,
      })
      .then(function (response) {
          if(payments ==='VNPay'){
              axios.post('https://sever-coffeehouse.herokuapp.com/create_payment_url', {
                priceTotal:priceAll,
                orderId:response.data.idOrder
            })
            .then(function (responseCode) {
                dispatch(modalSlice.actions.toggleLoading())
                window.location.href= responseCode.data
            })
          }else{
            var idOrder = response.data.idOrder;
            const socket = io("https://sever-coffeehouse.herokuapp.com", { transports : ['websocket'] });
            socket.emit("don-hang-moi", response.data);
            const order = createOrder(tokenAhamove,address,name,phone,note,carts)
            order.then(order=>{
                console.log('Xem chi tiết đơn hàng tại: ',order.data.shared_link);
            })
            axios.post('https://sever-coffeehouse.herokuapp.com/sendMail', {
                mail: email,
                address: address,
                priceTotal: priceAll,
                name: name,
                idOrder: idOrder,
            })
            .then(function (responseMail) {
            //  setLoading(false);
              dispatch(modalSlice.actions.toggleLoading())
              alert("Đặt hàng thành công ! Quý khách vui lòng kiểm tra email để biết được id đơn hàng và tra cứu thông tin !")
                dispatch(cartSlice.actions.updateCart('[]'));
                navigate("/");
    
    
            })
          }
          clearCart();
        
      
      })
      .catch(function (error) {
          console.log(error);
      });
   
   
    }
    else{
    
      alert("Vui long nhập email và thông tin không được để trống")
    }
    
  }
 

  
  return (
    carts.length>0 ?
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
                <div className="col-lg-6 col-md-12">
                  
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
                            <button onClick={()=>{/*setLoading(true);*/redirectOnline()}} className="btn btn-light color-primary" disabled={Number.isNaN(priceShip) ? "disabled" : false}>
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
    :
    <ThongBao/>
  )
}

export default Cart;
