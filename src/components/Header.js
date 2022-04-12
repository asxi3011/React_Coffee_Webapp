import { React, useState, memo } from "react"
import { Link } from "react-router-dom";
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Cart from './Cart'

function Header({localCount,setCoupon}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const clearCart = ()=>{
        localStorage.removeItem('coupon');
        setCoupon("");
        setShow(false);
    }
    return (
        <>
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
                                    onClick={handleShow}
                                >
                                    Khuyến mãi
                                </div>
                                <Link to="/tracuudonhang" className="button-block a-none text-white page-header">
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
                                    <div id="btn_show_Modal" onClick={handleShow} className="nav__mobile-link text-white">Khuyến mãi</div>
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
                            <Cart localCount={localCount}/>
                        </div>
                        <label htmlFor="nav-mobile-input" className="nav__overlay"></label>

                    </div>
                </div>
            </div>
            
        <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
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
                                    onClick={()=>{localStorage.setItem("coupon","30phantram");setCoupon("30phantram"); setShow(false);}}
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
                                    onClick={()=>{localStorage.setItem("coupon","19tuoixanh");setCoupon("19tuoixanh"); setShow(false);}}
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
        </>
    )
}

export default memo(Header)