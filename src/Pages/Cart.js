import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { io } from "socket.io-client";
import Voices from "../components/Client/Cart/Voices";
import Info from "../components/Client/Cart/Info";
import cartSlice from "../components/Client/Cart/cartSlice";
import ThongBao from "../components/Client/Partials/ThongBao";
import modalSlice from "../components/Client/Modal/modalSlice";
import { createOrder } from "../redux/callApi";
import {
  getTokenAhamove,
  getPriceCoupon,
  getPriceShip,
  getPriceTotal,
  getPriceAll,
  getCoupon,
  getCart,
  getName,
  getEmail,
  getPhone,
  getAddress,
  getNote,
  getPayments,
  getUser,
} from "../redux/selector";
import { isPhone } from "../utils/convert";
function Cart() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const phone = useSelector(getPhone);
  const address = useSelector(getAddress);
  const user = useSelector(getUser);
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
    localStorage.removeItem("arrayCart");
    localStorage.removeItem("countQuanity");
  }
  const validateCheckEmpty = (value) => {
    return value.trim() !== "";
  };
  const validateInput = (iname, iadress, iphone, iemail) => {
    return (
      validateEmail(iemail) &&
      validateCheckEmpty(iname) &&
      validateCheckEmpty(iphone) &&
      validateCheckEmpty(iadress)
    );
  };
  const redirectOnline = () => {
    if (validateInput(name, address, phone, email)) {
      dispatch(modalSlice.actions.toggleLoading());
      if(user.docID){
        console.log("RUN HAVE DOC ID ");
        axios
          .post("https://sever-coffeehouse.herokuapp.com/order", {
            noteOrder: note,
            hotenOrder: name,
            docID: user.docID,
            emailOrder: email,
            sdtOrder: phone,
            addressOrder: address,
            priceCharge: priceShip,
            priceCoupon: priceCoupon,
            nameCoupon: coupon,
            priceTotal: priceTotal,
            priceAll: priceAll,
            listProductOrder: carts,
            payment: payments,
          })
          .then(function (response) {
            if (payments === "VNPay") {
              axios
                .post(
                  "https://sever-coffeehouse.herokuapp.com/create_payment_url",
                  {
                    priceTotal: priceTotal,
                    orderId: response.data.idOrder,
                  }
                )
                .then(function (responseCode) {
                  dispatch(modalSlice.actions.toggleLoading());
                  window.location.href = responseCode.data;
                });
            } else {
              var idOrder = response.data.idOrder;
              const socket = io("https://sever-coffeehouse.herokuapp.com", {
                transports: ["websocket"],
              });
              socket.emit("don-hang-moi", response.data);
              const order = createOrder(
                tokenAhamove,
                address,
                name,
                phone,
                note,
                carts
              );
              order.then((order) => {
                console.log(
                  "Xem chi ti???t ????n h??ng t???i: ",
                  order.data.shared_link
                );
              });
              axios
                .post("https://sever-coffeehouse.herokuapp.com/sendMail", {
                  mail: email,
                  address: address,
                  priceTotal: priceAll,
                  name: name,
                  idOrder: idOrder,
                })
                .then(function (responseMail) {
                  //  setLoading(false);
                  dispatch(modalSlice.actions.toggleLoading());
                  alert(
                    "?????t h??ng th??nh c??ng ! Qu?? kh??ch vui l??ng ki???m tra email ????? bi???t ???????c id ????n h??ng v?? tra c???u th??ng tin !"
                  );
                  dispatch(cartSlice.actions.updateCart("[]"));
                  navigate("/");
                });
            }
            clearCart();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      else{
        console.log("RUNE WITHOUT NE");
        localStorage.setItem("nameCus", name);
        localStorage.setItem("emailCus", email);
        localStorage.setItem("phoneCus", phone);
        localStorage.setItem("addressCus", address);
        localStorage.setItem("noteCus", note);
        axios
          .post("https://sever-coffeehouse.herokuapp.com/order", {
            noteOrder: note,
            hotenOrder: name,
            emailOrder: email,
            sdtOrder: phone,
            addressOrder: address,
            priceCharge: priceShip,
            priceCoupon: priceCoupon,
            nameCoupon: coupon,
            priceTotal: priceTotal,
            priceAll: priceAll,
            listProductOrder: carts,
            payment: payments,
          })
          .then(function (response) {
            if (payments === "VNPay") {
              axios
                .post(
                  "https://sever-coffeehouse.herokuapp.com/create_payment_url",
                  {
                    priceTotal: priceTotal,
                    orderId: response.data.idOrder,
                  }
                )
                .then(function (responseCode) {
                  dispatch(modalSlice.actions.toggleLoading());
                  window.location.href = responseCode.data;
                });
            } else {
              var idOrder = response.data.idOrder;
              const socket = io("https://sever-coffeehouse.herokuapp.com", {
                transports: ["websocket"],
              });
              socket.emit("don-hang-moi", response.data);
              const order = createOrder(
                tokenAhamove,
                address,
                name,
                phone,
                note,
                carts
              );
              order.then((order) => {
                console.log(
                  "Xem chi ti???t ????n h??ng t???i: ",
                  order.data.shared_link
                );
              });
              axios
                .post("https://sever-coffeehouse.herokuapp.com/sendMail", {
                  mail: email,
                  address: address,
                  priceTotal: priceAll,
                  name: name,
                  idOrder: idOrder,
                })
                .then(function (responseMail) {
                  //  setLoading(false);
                  dispatch(modalSlice.actions.toggleLoading());
                  alert(
                    "?????t h??ng th??nh c??ng ! Qu?? kh??ch vui l??ng ki???m tra email ????? bi???t ???????c id ????n h??ng v?? tra c???u th??ng tin !"
                  );
                  dispatch(cartSlice.actions.updateCart("[]"));
                  navigate("/");
                });
            }
            clearCart();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    } else {
      alert("Vui long nh???p email v?? th??ng tin kh??ng ???????c ????? tr???ng");
    }
  };

  return carts.length > 0 ? (
    <div className="pd-header">
      <div className="container">
        <div className="name2">
          <div className="mt-5 text-center fs-4">
            <i className="fas fa-file text-warning" />
            <span className="fw-bold">X??c nh???n ????n h??ng</span>
          </div>
          <div className="row my-5">
            <Info />
            <div className="col-lg-6 col-md-12">
              <div className="bd-cart">
                <div>
                  <Voices redirectOnline={redirectOnline} />
                  <div>
                    <div className="bg-getAll py-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="text-white">
                          <div>Th??nh ti???n</div>
                          <div
                            id="price_total_with_charge_show"
                            className="fw-bold"
                          >
                            {priceAll.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </div>
                          <input
                            id="price_total_with_charge"
                            name="priceTotal"
                            className="fw-bold"
                            hidden
                          />
                        </div>
                        <button
                          onClick={() => {
                            /*setLoading(true);*/ redirectOnline();
                          }}
                          className="btn btn-light color-primary"
                          disabled={
                            Number.isNaN(priceShip) ? "disabled" : false
                          }
                        >
                          ?????t h??ng
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
  ) : (
    <ThongBao />
  );
}

export default Cart;
