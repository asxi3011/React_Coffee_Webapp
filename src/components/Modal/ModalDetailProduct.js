import React,{ useState, useEffect, useLayoutEffect }  from "react";

import {Modal} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'

import ListSize from '../ListSize'

import cartSlice from "../Cart/cartSlice";

import {getCart} from '../../redux/selector'
import { BsFillFileTextFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";

function ModalDetailProduct(props) {

    const dispatch = useDispatch();
 const arrayP = useSelector(getCart);
  const sizes = props.product.Size 
  const prices = props.product.priceStandard
  const [count, setCount] = useState(props.product.quantities)
  const [checked, setChecked] = useState({name:props.product.sizeNameSelected,value:props.product.sizeValueSelected});
  const [notes, setNote] = useState(props.product.note)
  const [carts, setCarts] = useState(props.product)
const getCountArray=(array)=>{
    return array.reduce((preCount,item)=>preCount+item.quantities,0);
}

useEffect(() => {
        setCount(props.product.quantities);
        setChecked({name:props.product.sizeNameSelected,value:props.product.sizeValueSelected});
        setNote(props.product.note);
        setCarts(props.product)
},[props.show])
useEffect(()=>{
    setCarts({
        ...carts,
        priceTotal: count * (prices + Number(checked.value)),
        quantities: count,          
        sizeNameSelected: checked.name,
        sizeValueSelected: Number(checked.value),
        
    })
},[count,checked])
useEffect(() => {
    setCarts({
        ...carts,
        note: notes,
    })
}, [notes])
const onClickSessions = () => {
    const arrayCP = JSON.parse(localStorage.getItem('arrayCart')) || [];
   
    const arrT = arrayCP.filter((ele,index)=>ele._id===carts._id && ele.sizeValueSelected===carts.sizeValueSelected && ele.note===carts.note);
    if(arrT.length>0 && (checked.value!==props.product.sizeValueSelected ||  notes !== props.product.note)){
       arrayCP.map(ele=>{
           if(ele === arrT[0]){
             ele.quantities = Number(ele.quantities)+carts.quantities;
             ele.priceTotal = Number(ele.priceTotal)+carts.priceTotal;
           }
           return ele
       })
       arrayCP.splice(props.index,1)
      
    }else{
        arrayCP[props.index] = carts;
        
    }
    const quantitiesCart = getCountArray(arrayCP);
    localStorage.setItem("arrayCart",JSON.stringify(arrayCP));
    localStorage.setItem("countQuanity",quantitiesCart)
    dispatch(cartSlice.actions.updateCart(JSON.stringify(arrayCP)));
    dispatch(cartSlice.actions.setQuantities(quantitiesCart));
    props.onHide();
};


    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{backgroundColor:'transparent'}}
      >
        <Modal.Body>
        <div className="">
            <div className="container-fluid">
            <h2 id="name_product" className="d-block text-center price-size-show fw-bold">{props.product.nameProduct}</h2>
                    <div className=" my-5">
                        <div className="row">
                            <div className="col-6">
                                <div className="details-image-info-product">
                                    <img src={`https://sever-coffeehouse.herokuapp.com/uploads/${props.product.imageRepresent}`} alt="" />
                                </div>
                                <div className="d-flex gap-3 justify-content-center">
                                    <div className="list-image-details-info-product mt-2 ">
                                        <div>
                                            <img src={`https://sever-coffeehouse.herokuapp.com/uploads/${props.product.imageRepresent}`} alt="" />

                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4">{props.product.descriptionProduct}
                                </p>
                            </div>
                           
                            <div className="col-6 ">
                             
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
                                            >{count}</span>

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

                                {<ListSize sizes={sizes} checked={checked} setChecked={setChecked}/>}

                                <button type="submit" className="btn btn-color-primary w-100 mt-4"
                                    id="btn_addToCart" onClick={onClickSessions}>
                                    {
                                        (count * (prices + Number(checked.value))).toLocaleString()
                                    }đ - Thêm vào giỏ hàng

                                </button>
                               
                            </div>

                        </div>
                    </div>
              </div>
           
        </div>
        </Modal.Body>
      
      </Modal>
    );
  }

export default ModalDetailProduct