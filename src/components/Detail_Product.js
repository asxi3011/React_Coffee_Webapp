import React from "react";
import { ToastContainer, toast } from 'react-toastify'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { BsFillFileTextFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useParams } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import Loading from './Loading';
const DetailProduct = ({setLocalCount}) => {
    let customToast = () =>
        toast.success('Chọn món thành công',
            {
                autoClose: 500,
                draggable: true,
                hideProgressBar: true,
            });
    const [loading,setLoading] = useState(true);
    const [count, setCount] = useState(1)
    const [notes, setNote] = useState([])
    const [sizes, setSizes] = useState([])
    const [carts, setCarts] = useState([])
    const [name_products, setNameProducts] = useState([])
    const [imgs, setImgs] = useState("")
    const [ids, setIds] = useState([])
    const [prices, setprices] = useState(0)
    const [description, setDescription] = useState("")
    const [checked, setChecked] = useState({});
    const [priceTotal, setPriceTotal] = useState(0);
    const { slug } = useParams()

    useEffect(() => {
        setCarts({
            imgs,
            sizes,
            currentPriceProduct: prices,
            name_product: name_products,
            note: notes,
            idProduct: ids,
            priceTotal: priceTotal,
            quanityProduct: count,
            description,            
            sizeName: checked.name,
            sizePrice: Number(checked.value),
        })
    }, [checked,imgs,description,sizes, priceTotal, carts.length, count, ids, notes, prices, name_products]) // Chỉnh thay đổi giỏ hàng
    useEffect(() => {
        setPriceTotal(() => {
            return count * (prices + Number(checked.value))
        });
    }, [checked, count, prices]) // Chỉnh tổng giá tiền
    const onClickSessions = () => {
        const arrayP = JSON.parse(localStorage.getItem('arrayCart')) || [];
        const countPlus = JSON.parse(localStorage.getItem('countQuanity') || 0)
        arrayP.push(carts)
        localStorage.setItem('arrayCart', JSON.stringify(arrayP))
        localStorage.setItem('countQuanity', count + countPlus)
        setCount(1)
        console.log(count)
        setNote('');
        customToast();
        setLocalCount(count + countPlus);

    };

    const sizeComponent = (sizes) => {
        return (
            <div className="mt-4 bd-size">
                <div className="bg-border ">Chọn size (BẮT BUỘC)</div>
                <div className="">
                    <div className="d-flex justify-content-evenly p-2">
                        {sizes.map((size, index) =>
                            <div key={index} className="d-flex align-items-center gap-3" >

                                <input className="form-check-input rad-primary" id={`sizePrice${index}`} type="radio" name={size.name}
                                    checked={checked.name === size.name} value={size.value} onChange={() => {
                                        setChecked({ name: size.name, value: size.value })
                                    }}
                                />
                                <div>
                                    <label htmlFor={`sizePrice${index}`} className="d-block" >{size.name}</label>
                                    <label htmlFor={`sizePrice${index}`} className="d-block price-size-show"
                                    >{Number(size.value).toLocaleString()} đ</label>
                                    <label className="price-size" hidden>s</label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    } // Componet Size
    useEffect(() => {
        setLoading(true);
        axios.get(`https://sever-coffeehouse.herokuapp.com/product/${slug}`)
        .then(res => {
            setImgs(res.data.product.imageRepresent)
            setprices(res.data.product.priceStandard)
            setPriceTotal(res.data.product.priceStandard);
            setDescription(res.data.product.descriptionProduct)
            setNameProducts(res.data.product.nameProduct)
            setSizes(res.data.size)
            setIds(res.data.product._id)
            setChecked({ name: res.data.size[0].name, value: res.data.size[0].value })
            setLoading(false);
        });

    }, [slug]) // Lấy dữ liệu từ API

    return (
        <>
        <div className="pd-header">
            <div className="container">
                <div className="name">
                    <div className="bd-product my-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="details-image-info-product">
                                    <img src={`https://sever-coffeehouse.herokuapp.com/uploads/${imgs}`} alt="" />
                                </div>
                                <div className="d-flex gap-3 justify-content-center">
                                    <div className="list-image-details-info-product mt-2 ">
                                        <div>
                                            <img src={`https://sever-coffeehouse.herokuapp.com/uploads/${imgs}`} alt="" />

                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4">{description}
                                </p>
                            </div>

                            <div className="col-6 ">
                                <h2 id="name_product" className="d-block price-size-show fw-bold"   >{name_products}</h2>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span id=""
                                            className="details-price-prodcut">{prices.toLocaleString()}đ</span>
                                        <span id="details-price-product" className="details-price-prodcut"
                                            hidden></span>
                                    </div>
                                    <div className="quanity-product">
                                        {count <= 1 ? <button id="btn_down" type="button" className="mx-2 btn btn-circle-primary btn-circle-disable" ><FaMinus
                                            className=" text-white"></FaMinus></button>

                                            : <button id="" type="button"
                                                className="btn btn-circle-primary  mx-2" onClick={() => setCount(count - 1)}>
                                                <FaMinus className=" text-white"></FaMinus></button>}


                                        <span className="mx-2" name="test" id="idcount" value={count}
                                            onChange={e => setCount(e.target.value)}>{count}</span>

                                        <button type="button" id="btn_up" className="mx-2 btn btn-circle-primary" onClick={() => setCount(count + 1)}>
                                            <FaPlus className="fas fa-plus text-white"></FaPlus></button>
                                    </div>
                                </div>

                                <div>
                                    <div className="input-group mt-4">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">
                                                <BsFillFileTextFill className="text-secondary  fs-4" />
                                            </div>
                                        </div>
                                        <input type="text" className="form-control" id="inlineFormInputGroup"
                                            value={notes} onChange={e => setNote(e.target.value)} placeholder="Ghi chú cho món tại đây" />
                                    </div>
                                </div>

                                {sizeComponent(sizes)}

                                <button type="submit" className="btn btn-color-primary w-100 mt-4"
                                    id="btn_addToCart" onClick={onClickSessions} >


                                    {
                                        (priceTotal).toLocaleString()
                                    }đ - Thêm vào giỏ hàng

                                </button>
                                <ToastContainer
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

         <Loading status={loading}/>                               
         </>
    )
}

export default DetailProduct