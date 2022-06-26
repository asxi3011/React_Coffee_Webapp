import React from "react";
import ItemCart from '../ItemCart/index'
import { useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import {getQuantitiesCart,getPriceCoupon,getPriceTotal,getCoupon,getCart,getPriceShip} from '../../redux/selector'
import cartSlice from "./cartSlice";
import modalSlice from '../Modal/modalSlice'

export default function Voices (){
    const dispatch = useDispatch()
    const coupon = useSelector(getCoupon);
    const priceCoupon = useSelector(getPriceCoupon);
    const priceTotal = useSelector(getPriceTotal);
    const carts = useSelector(getCart);
    const quantities = useSelector(getQuantitiesCart);
    const priceShip = useSelector(getPriceShip);
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
        <span className="fw-bold fs-5 pos-relative">
          Các món đã chọn
          <div className="line_bottom" />
        </span>
        <Link to="/" className="btn btn-no-background a-none text-dark">
          Thêm món
        </Link>
      </div>
      
      <div className="row" id="listProductCart">
         {carts.map((itemCart,index)=><ItemCart key={index} index={index} itemCart={itemCart} handleRemove={handleRemove}/>)} 
        </div>
      <div className="fw-bold fs-5 py-2">
        <span className="pos-relative">
        Tổng cộng
        <div className="line_bottom"/>
        </span>
      </div>
     
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
                        <span id="price_charge_show" >{Number(priceShip).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}
                        </span>
                        <span id="price_charge"  hidden></span>
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