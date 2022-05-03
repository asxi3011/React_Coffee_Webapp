
import React,{useState} from 'react';
import ModalDetailProduct from '../Modal/ModalDetailProduct';


function ItemCart(props){
    const [show,setShow] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);
 
    return(
        show ?
            <div className="col-12 ItemCart">
                {console.log('đã render Item')}
                  <div className="line-product d-flex align-items-center gap-2 my-2">
                    <div className="btn btn-edit-product-cart" onClick={setModalShow}>
                      <i className="fas fa-pen color-primary" />
                    </div>
                    <div className="flex-grow-1">
                      <div className="fw-bold">
                        {props.itemCart.quantities} x {props.itemCart.nameProduct}
                      </div>
                      <div>
                        Size : {props.itemCart.sizeNameSelected}
                      </div>
                      <div>
                        {props.itemCart.note}
                      </div>
                      <div onClick={()=>props.handleRemove(props.index)} className="btn-delte-product-cart d-inline-block">
                        Xóa
                      </div>
                    </div>
                    <div>
                      {Number(props.itemCart.priceTotal).toLocaleString("vi-VN",{style:"currency", currency:"VND"})}           
                    </div>
                  </div>
                  <ModalDetailProduct
                    product={props.itemCart}
                    show={modalShow}
                    onHide={() =>{setModalShow(false);}}
                    index={props.index}
                  />
                  
            </div>
        :<></>
    )
}
export default ItemCart