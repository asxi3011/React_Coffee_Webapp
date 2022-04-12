import React ,{useState,useEffect} from 'react';
import {Modal} from 'react-bootstrap'
import { toast } from 'react-toastify'
import { BsFillFileTextFill } from "react-icons/bs";
import { FaPlus, FaMinus } from "react-icons/fa";
function MyVerticallyCenteredModal(props) {
  let customToast = () =>
  toast.success('Chọn món thành công',
      {
          autoClose: 500,
          draggable: true,
          hideProgressBar: true,
      });
  const [count, setCount] = useState(props.cart.quanityProduct)
  const [notes, setNote] = useState(props.cart.note)
  const [carts, setCarts] = useState(props.cart)
  const [checked, setChecked] = useState({name:props.cart.sizeName,value:props.cart.sizePrice});
  const [priceTotal, setPriceTotal] = useState(props.cart.priceTotal);
  const sizes = props.cart.sizes
  const name_products = props.cart.name_product
  const imgs = props.cart.imgs
  const description = props.cart.description
  const ids = props.cart.idProduct
  const prices = props.cart.currentPriceProduct
  
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
}
const getCountArray=(array)=>{
    return array.reduce((preCount,item)=>preCount+item.quanityProduct,0);
  }
const onClickSessions = () => {
  const arrayP = JSON.parse(localStorage.getItem('arrayCart')) || [];
  
   arrayP[props.index] = carts;
    
    setNote('');
    customToast();
    
   
    props.setLocalCount(getCountArray(arrayP));
    props.setarrayP(arrayP)
    localStorage.setItem("arrayCart",JSON.stringify(arrayP));
    localStorage.setItem("countQuanity",getCountArray(arrayP))
    props.onHide();
};
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
}, [checked, count, prices]) 


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
            <h2 id="name_product" className="d-block text-center price-size-show fw-bold">{name_products}</h2>
                    <div className=" my-5">
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

                                {sizeComponent(sizes)}

                                <button type="submit" className="btn btn-color-primary w-100 mt-4"
                                    id="btn_addToCart" onClick={onClickSessions}>
                                    {
                                        (priceTotal).toLocaleString()
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

export default MyVerticallyCenteredModal