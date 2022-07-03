import { React, useState} from "react"
import { Link } from "react-router-dom";
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
export default function ThongBao() {
  const [show, setShow] = useState(true);
    const handleShow = () => setShow(true);
  return (
      <> 
    <Modal show={show} onHide={handleShow} aria-labelledby="contained-modal-title-vcenter">     
        <Modal.Body>     
    <div className="">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content d-flex" style={{border: 0}}>
        <div className="p-3">
          <div className="m-auto text-white fs-3 text-center">
            <img className="img-50 img-rdus-4" src="image/empty_cart.jpg" alt="" />
          </div>
          <div className="text-center fw-bold fs-4 my-3">
            Giỏ hàng hiện tại bị trống.
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
                    <Link to= "/">
                        <Button className="btn-modal-cart fw-bold" variant="outline-warning" >
                            Đặt hàng
                        </Button></Link>
                    </Col>
                </Row>
            </Container> 
        </Modal.Footer>
        </Modal>
 </>
  

  );
}


