import { React, memo,useRef,useEffect} from "react";
import { Link } from "react-router-dom";
import QuantitiesCart from "../QuantitiesCart/index";
import {Box} from "@chakra-ui/react"
import { useDispatch,useSelector } from "react-redux";
import modalSlice from "../Modal/modalSlice";
import {authentication} from "../../../Firebase/config"
import {getUser} from "../../../redux/selector"
import jazzicon  from 'jazzicon';
import Search from "../Search";
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const avatar = useRef(null);
  
  useEffect(()=>{
    const element = avatar.current
    if(element?.firstChild){
      element.removeChild(element.firstChild);
    }
    if(user?.ID){
      console.log(user);
      const icon = jazzicon(40,user?.ID);
      element.appendChild(icon);
    }
  },[user])
  return (
    <div
      id="myTopnav"
      className="bg-header header-app container-fluid"
      style={{ top: 0 }}
    >
      <div className="text-white align-items-center ">
        <div className="d-flex align-items-center header-height justify-content-between pd-w-100 ">
          <div className="div-icon">
            <label htmlFor="nav-mobile-input">
              <div className="mobile-menu-btn">
                <i className="icon-menu fa-solid fa-align-justify"></i>
              </div>
            </label>
          </div>
          <div className="d-flex gap-5 align-items-center">
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
                  <span className="fw-bold">Giao ha??ng</span>
                  <div className="fs-min-plus text-address">
                    T???n nh?? c???a b???n
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex gap-3 fw-bold navivation-header mw-400 fs-min-plus">
           
              <Link
                to="/news"
                className="button-block a-none text-white  page-header"
              >
                Tin t????c
              </Link>
              <div
                id="btn_show_Modal"
                className="button-block a-none pe-cursor text-white page-header"
                onClick={() => dispatch(modalSlice.actions.setCoupon(true))}
              >
                Khuy????n ma??i
              </div>
              <Link
                to="/checkOrder"
                className="button-block a-none text-white page-header"
              >
                Tra c???u ????n h??ng
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
                <Link to="/news" className="nav__mobile-link text-white">
                  Tin t???c
                </Link>
              </li>
              <li>
                <div
                  id="btn_show_Modal"
                  onClick={() => dispatch(modalSlice.actions.setCoupon(true))}
                  className="nav__mobile-link text-white"
                >
                  Khuy???n m??i
                </div>
              </li>
              <li>
                <Link
                  to="/tracuudonhang"
                  className="nav__mobile-link text-white"
                >
                  Tra c???u ????n
                </Link>
              </li>
              <li>
                <h1
                  style={{ fontSize: "20px", padding: "20px 0", color: "#000" }}
                >
                  Danh m???c s???n ph???m
                </h1>
              </li>
              <li>
                <Link to="/banh-ngot" className="nav__mobile-link text-white">
                  <i className="close-icon fa-solid fa-xmark"></i> B??nh Ng???t
                </Link>
              </li>
              <li>
                <Link to="/tra" className="nav__mobile-link text-white">
                  <i className="close-icon fa-solid fa-xmark"></i> Tr??
                </Link>
              </li>
              <li>
                <Link to="/ca-phe" className="nav__mobile-link text-white">
                  <i className="close-icon fa-solid fa-xmark"></i> C?? ph??
                </Link>
              </li>
              <li>
                <Link
                  to="/thuong-thuc-tai-nha-"
                  className="nav__mobile-link text-white"
                >
                  <i className="close-icon fa-solid fa-xmark"></i> Th?????ng th???c
                  t???i nh??
                </Link>
              </li>
              <li>
                <Link to="/da-xay" className="nav__mobile-link text-white">
                  <i className="close-icon fa-solid fa-xmark"></i> ???? xay
                </Link>
              </li>
            </ul>
          </nav>
          <div className="d-flex align-items-center justify-content-end gap-3">
            {/* input seach */}
            <Search />
            {/* profile */}
            <div className=" ">
              <Link
                to="/profile"
              >
               
              </Link>
            </div>
            
              <Link
                to="/profile"
                className="d-flex align-items-center gap-2"
              >
                <div> {user && user.name}</div>
                <div   className="btn-40 d-flex rounded-circle btn-cart"  style={{ backgroundColor: "#eee" }}>
                {user && user.ID
                ? <Box ref={avatar} display="flex" alignItems="center"></Box>
                : <i className="fa-regular fa-user color-primary m-auto fs-4"></i>}
                </div>
               
              </Link>
           
            <QuantitiesCart />
          </div>
          <label htmlFor="nav-mobile-input" className="nav__overlay"></label>
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
