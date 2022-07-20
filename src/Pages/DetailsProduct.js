import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { BsFillFileTextFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import ListSize from "../components/Client/ListSize";
import cartSlice from "../components/Client/Cart/cartSlice";
import { fetchDetailsProductRequest } from "../redux/callApi";
const DetailProduct = () => {
  const dispatch = useDispatch();
  let customToast = () => {
    toast.success("Chọn món thành công", {
      autoClose: 500,
      draggable: true,
      hideProgressBar: true,
    });
  };
  const [info, setInfo] = useState({});
  const [count, setCount] = useState(1);
  const [notes, setNote] = useState("");
  const [carts, setCarts] = useState({});
  const [checked, setChecked] = useState({});
  const { slug } = useParams();
  useEffect(() => {
    setCarts({
      ...info,
      note: notes,
      priceTotal: count * (info.priceStandard + Number(checked.value)),
      quantities: count,
      sizeNameSelected: checked.name,
      sizeValueSelected: Number(checked.value),
    });
  }, [checked, count]); // Chỉnh thay đổi giỏ hàng
  useEffect(() => {
    setCarts({
      ...carts,
      note: notes,
    });
  }, [notes]); // Chỉnh thay đổi giỏ hàng
  useEffect(() => {
    console.log("getAPI");
    const detailProduct = fetchDetailsProductRequest(slug);
    detailProduct.then((res) => {
      setInfo(res);
      setChecked({ name: res.Size[0].name, value: res.Size[0].value });
    });
  }, [slug]); // Lấy dữ liệu từ API
  const handleAddCart = () => {
    console.log(777);
    const cart = JSON.parse(localStorage.getItem("arrayCart")) || [];
    const countPlus = JSON.parse(localStorage.getItem("countQuanity") || 0);

    const arrayTrung = cart.filter(
      (ele) =>
        ele._id === carts._id &&
        ele.sizeValueSelected === carts.sizeValueSelected &&
        ele.note === carts.note
    );
    if (arrayTrung.length > 0) {
      cart.map((ele, index) => {
        if (
          ele._id === carts._id &&
          ele.sizeValueSelected === carts.sizeValueSelected &&
          ele.note === carts.note
        ) {
          ele.quantities = ele.quantities + carts.quantities;
          ele.priceTotal = ele.priceTotal + carts.priceTotal;
        }
        return ele;
      });
    } else {
      cart.push(carts);
    }
    localStorage.setItem("arrayCart", JSON.stringify(cart));
    localStorage.setItem("countQuanity", count + countPlus);
    dispatch(cartSlice.actions.updateCart(JSON.stringify(cart)));
    dispatch(cartSlice.actions.setQuantities(count + countPlus));
    customToast();
    setCount(1);
    setNote("");
  };
  return Object.keys(info).length === 0 && info.constructor === Object ? (
    ""
  ) : (
    <div className="pd-header">
      <div className="container">
        <div className="name">
          <div className="bd-product my-5">
            <div className="row">
              <div className="col-6">
                <div className="details-image-info-product">
                  <img
                    src={`https://sever-coffeehouse.herokuapp.com/uploads/${info.imageRepresent}`}
                    alt=""
                  />
                </div>
                <div className="d-flex gap-3 justify-content-center">
                  <div className="list-image-details-info-product mt-2 ">
                    <div>
                      <img
                        src={`https://sever-coffeehouse.herokuapp.com/uploads/${info.imageRepresent}`}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <p className="mt-4">{info.descriptionProduct}</p>
              </div>

              <div className="col-6 ">
                <h2
                  id="name_product"
                  className="d-block price-size-show fw-bold"
                >
                  {info.nameProduct}
                </h2>
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span id="" className="details-price-prodcut">
                      {info.priceStandard.toLocaleString()}đ
                    </span>
                    <span
                      id="details-price-product"
                      className="details-price-prodcut"
                      hidden
                    ></span>
                  </div>
                  <div className="quanity-product">
                    {count <= 1 ? (
                      <button
                        id="btn_down"
                        type="button"
                        className="mx-2 btn btn-circle-primary btn-circle-disable"
                      >
                        <FaMinus className=" text-white"></FaMinus>
                      </button>
                    ) : (
                      <button
                        id=""
                        type="button"
                        className="btn btn-circle-primary  mx-2"
                        onClick={() => setCount(count - 1)}
                      >
                        <FaMinus className=" text-white"></FaMinus>
                      </button>
                    )}

                    <span
                      className="mx-2"
                      name="test"
                      id="idcount"
                      value={count}
                      onChange={(e) => setCount(e.target.value)}
                    >
                      {count}
                    </span>

                    <button
                      type="button"
                      id="btn_up"
                      className="mx-2 btn btn-circle-primary"
                      onClick={() => setCount(count + 1)}
                    >
                      <FaPlus className="fas fa-plus text-white"></FaPlus>
                    </button>
                  </div>
                </div>

                <div>
                  <div className="input-group mt-4">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <BsFillFileTextFill className="text-secondary  fs-4" />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="inlineFormInputGroup"
                      value={notes}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Ghi chú cho món tại đây"
                    />
                  </div>
                </div>

                {
                  <ListSize
                    sizes={info.Size}
                    checked={checked}
                    setChecked={setChecked}
                  />
                }

                <button
                  type="submit"
                  className="btn btn-color-primary w-100 mt-4"
                  id="btn_addToCart"
                  onClick={handleAddCart}
                >
                  {(
                    count *
                    (info.priceStandard + Number(checked.value))
                  ).toLocaleString()}
                  đ - Thêm vào giỏ hàng
                </button>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
