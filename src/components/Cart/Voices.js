import React,{useState,useEffect} from "react";
import ItemCart from '../ItemCart/index'
import { useSelector,useDispatch} from 'react-redux';

import {getQuantitiesCart,getPriceCoupon,getPriceTotal,getPriceAll,getCoupon,getCart} from '../../redux/selector'
import cartSlice from "./cartSlice";
import modalSlice from '../modalSlice'

export default function Voices (){
    const dispatch = useDispatch()
    const coupon = useSelector(getCoupon);
    const priceCoupon = useSelector(getPriceCoupon);
    const priceTotal = useSelector(getPriceTotal);
    const carts = useSelector(getCart);
    const quantities = useSelector(getQuantitiesCart)
    const handleRemove=(index)=>{
        const newList=carts.filter((order,indexOrder)=>indexOrder !== index);
        localStorage.setItem('arrayCart',JSON.stringify(newList));
        localStorage.setItem('countQuanity',JSON.stringify(quantities));
        dispatch(cartSlice.actions.updateCart(JSON.stringify(newList)))
        dispatch(cartSlice.actions.setQuantities(quantities));
    }
    return(
        <>
        <div className="d-flex justify-content-between align-items-center py-3 header">
        <span className="fw-bold fs-5">
          Các món đã chọn
        </span>
        <a href="/" className="btn btn-no-background a-none text-dark">
          Thêm món
        </a>
      </div>
      <div className="line_bottom">
      </div>
      <div className="row" id="listProductCart">
         {carts.map((itemCart,index)=><ItemCart key={index} index={index} itemCart={itemCart} handleRemove={handleRemove}/>)} 
        </div>
      <div className="fw-bold fs-5 py-2">
        Tổng cộng
      </div>
      <div className="line_bottom" />
      <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                        <span >
                          Thành tiền
                        </span>
                        <span id="price_total" >
                            {priceTotal.toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
                        </span>
                      </div>
                      <div className="py-3 d-flex justify-content-between align-items-center bd-bottom">
                        <span >
                          Phí vận chuyển
                        </span>
                        <span id="price_charge_show" >  {Number(30000).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
                        </span>
                        <span id="price_charge"  hidden>30000</span>
                      </div>
                      <div className="py-3 d-flex justify-content-between align-items-center">
                        <div id="btn_show_modal_KM" onClick={()=>dispatch(modalSlice.actions.setCoupon(true))} className="color-primary pe-cursor">Khuyến mãi</div>
                        <div id="content-coupon">
                            {(coupon ==="" || coupon === null) ? "" : `${coupon}(${priceCoupon.toLocaleString("vi-VN",{style:"currency", currency:"VND"})})`}
                        </div>
                      </div>
        </>
      
   
  )
}