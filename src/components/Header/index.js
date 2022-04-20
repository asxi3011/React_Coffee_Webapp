import { React, useState, memo } from "react"
import { Link } from "react-router-dom";
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import QuantitiesCart from '../QuantitiesCart/index'
import {useDispatch} from 'react-redux'
import modalSlice from '../modalSlice'
function Header() {
   const dispatch = useDispatch();
    return (
      
        <div id="myTopnav" className="bg-header header-app " style={{ top: 0 }}>
            <div className="text-white align-items-center container-fluid">
                <div className="d-flex align-items-center header-height justify-content-between pd-w-100 ">
                    <div className="div-icon">
                        <label htmlFor="nav-mobile-input">
                            <div className="mobile-menu-btn">
                                <i className="icon-menu fa-solid fa-align-justify"></i>
                            </div>
                        </label>
                    </div>
                    <div className="d-flex gap-5  align-items-center">
                        <Link to="/" className="d-flex logo-width">
                            <img
                                className="w-100 m-auto"
                                src="https://order.thecoffeehouse.com/_nuxt/img/logo.174bdfd.svg"
                                alt=""
                            />
                        </Link>
                        <div className="border-giaohang d-flex gap-2 align-items-center">
                            <div className="img-addres">
                                <img
                                    className="w-100 h-100"
                                    src="https://minio.thecoffeehouse.com/images/tch-web-order/Delivery2.png"
                                    alt=""
                                />
                            </div>
                            <div className="d-flex align-items-center gap-2 px-2">
                                <div className="">
                                    <span className="fw-bold">Giao hàng</span>
                                    <div className="fs-min-plus text-address">Tận nhà của bạn</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-3 fw-bold navivation-header fs-min-plus">

                            <Link to="/product" className="button-block a-none text-white page-header">
                                Đặt hàng
                            </Link>
                            <Link to="/news" className="button-block a-none text-white  page-header">
                                Tin tức
                            </Link>
                            <div
                                id="btn_show_Modal"
                                className="button-block a-none pe-cursor text-white page-header"
                                onClick={()=>dispatch(modalSlice.actions.setCoupon(true))}
                            >
                                Khuyến mãi
                            </div>
                            <Link to="/checkOrder" className="button-block a-none text-white page-header">
                                Tra cứu đơn hàng
                            </Link>

                        </div>
                    </div>

                    <input type="checkbox" className="nav__input" id="nav-mobile-input" />

                    <nav className="nav__mobile">
                        <label htmlFor="nav-mobile-input" className="nav__mobile-close">
                            <i className="close-icon fa-solid fa-xmark"></i>
                        </label>
                        <ul className="nav__mobile-list">
                            <li>
                                <Link to="/product" className="nav__mobile-link text-white">Đặt hàng</Link>
                            </li>
                            <li>
                                <Link to="/news" className="nav__mobile-link text-white">Tin tức</Link>
                            </li>
                            <li>
                                <div id="btn_show_Modal" onClick={()=>dispatch(modalSlice.actions.setCoupon(true))} className="nav__mobile-link text-white">Khuyến mãi</div>
                            </li>
                            <li>
                                <Link to="/tracuudonhang" className="nav__mobile-link text-white">Tra cứu đơn</Link>
                            </li>
                            <li>
                                <h1 style={{ fontSize: "20px", padding: "20px 0", color: "#000" }}>Danh mục sản phẩm</h1>
                            </li>
                            <li>
                                <Link to="/banh-ngot" className="nav__mobile-link text-white"><i className="close-icon fa-solid fa-xmark"></i>  Bánh Ngọt</Link>
                            </li>
                            <li>
                                <Link to="/tra" className="nav__mobile-link text-white"><i className="close-icon fa-solid fa-xmark"></i>  Trà</Link>
                            </li>
                            <li>
                                <Link to="/ca-phe" className="nav__mobile-link text-white"><i className="close-icon fa-solid fa-xmark"></i>  Cà phê</Link>
                            </li>
                            <li>
                                <Link to="/thuong-thuc-tai-nha-" className="nav__mobile-link text-white"><i className="close-icon fa-solid fa-xmark"></i>  Thưởng thức tại nhà</Link>
                            </li>
                            <li>
                                <Link to="/da-xay" className="nav__mobile-link text-white"><i className="close-icon fa-solid fa-xmark"></i>  Đá xay</Link>
                            </li>

                        </ul>
                    </nav>

                    <div className=" ">
                        <QuantitiesCart/>
                    </div>
                    <label htmlFor="nav-mobile-input" className="nav__overlay"></label>

                </div>
            </div>
        </div>
            
      
    )
}

export default memo(Header)