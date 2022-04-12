
import React,{useState} from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';


function ItemCart(props){
    const [show,setShow] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);
    
    return(
        show ?
            <div className="col-12 ItemCart">
                  <div className="line-product d-flex align-items-center gap-2 my-2">
                    <div className="btn btn-edit-product-cart" onClick={setModalShow}>
                      <i className="fas fa-pen color-primary" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-bold">
                        {props.cart.quanityProduct} x {props.cart.name_product}
                      </div>
                      <div>
                        Size : {props.cart.sizeName}
                      </div>
                      <div>
                        {props.cart.note}
                      </div>
                      <div onClick={()=>props.handleRemove(props.index)} className="btn-delte-product-cart d-inline-block">
                        Xóa
                      </div>
                    </div>
                    <div>
                      {Number(props.cart.priceTotal).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}           
                    </div>
                  </div>
                  <MyVerticallyCenteredModal
                    cart={props.cart}
                    setLocalCount={props.setLocalCount}
                    show={modalShow}
                    setarrayP = {props.setarrayP}
                    onHide={() => setModalShow(false)}
                    index={props.index}
                  />
            </div>
        :<></>
    )
}
export default ItemCart