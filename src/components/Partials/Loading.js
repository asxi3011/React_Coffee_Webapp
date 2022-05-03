import { React} from "react"

import { Spinner, Modal} from 'react-bootstrap';
export default function Loading({status}) {
  
  return (
      <> 
      
        <Modal show={status} aria-labelledby="contained-modal-title-vcenter" centered contentClassName="bg-transparent border-0">
        <Modal.Body> 
            <div className="text-center">
            <Spinner animation="border" variant="warning" />
            </div> 
        </Modal.Body>
       
        </Modal>
 </>
  

  );
}


