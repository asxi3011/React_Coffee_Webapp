import { React } from "react"

import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import {useSelector,useDispatch} from 'react-redux'
import {getStatusCoupon} from '../../../redux/selector'
import modalSlice from './modalSlice'
import cartSlice from "../Cart/cartSlice";

function ModalCoupon() {
    const dispatch = useDispatch();
    const show = useSelector(getStatusCoupon);
    const clearCart = ()=>{
        localStorage.removeItem('coupon');
        dispatch(modalSlice.actions.setCoupon(false));
    }
    const handleSelectCoupon = (nameCoupon)=>{
        localStorage.setItem("coupon",nameCoupon);
        dispatch(modalSlice.actions.setCoupon(false));
        dispatch(cartSlice.actions.setCoupon(nameCoupon));
    }
    return(
        <Modal show={show} onHide={()=>dispatch(modalSlice.actions.setCoupon(false))} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
            <Modal.Title>Các chương trình khuyến mãi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="col-12  my-2">
                <div className="d-flex justify-content-center content-khuyenmai">
                    <div className="row pd-bd align-items-center">
                        <div className="col-4">
                            <img
                                className="img-preview-edit"
                                src="https://minio.thecoffeehouse.com/image/admin/Coupondelivery10k_238803.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-8">
                            <span>
                                Giảm 30% trên tổng giá trị của đơn hàng trên 500k <br />{" "}
                                (không bao gồm phí ship)
                            </span>
                            <div
                                className="color-primary mt-2 pe-cursor add_coupon"
                                data="30phantram"
                                onClick={()=>handleSelectCoupon('30phantram')}
                            >
                                Sử dụng ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 my-2">
                <div className="d-flex justify-content-center content-khuyenmai ">
                    <div className="row pd-bd align-items-center">
                        <div className="col-4">
                            <img
                                className="img-preview-edit"
                                src="https://minio.thecoffeehouse.com/image/admin/dong_gia_19k_coupon_499462.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-8">
                            <span>
                                Giảm trực tiếp 19k vào tổng tiền hóa đơn
                                <br /> (bao gồm phí ship)
                            </span>
                            <div
                                className="color-primary mt-2 pe-cursor add_coupon"
                                data="19tuoixanh"
                                onClick={()=>handleSelectCoupon('19tuoixanh')}
                            >
                                Sử dụng ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="outline-warning" onClick={clearCart}>
                            Hủy khuyến mãi
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Modal.Footer>
    </Modal>
    )
}

export default ModalCoupon;