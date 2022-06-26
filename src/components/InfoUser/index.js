import {Form} from 'react-bootstrap'


export default function InfoUser(){
    return(
        <div className="col">
        <span className="fs-1 pos-relative">
            Thông tin tài khoản
            <div className="line_bottom"/>
        </span>
        <div className="mt-3">
            <span className="">Tên khách hàng</span>
            <div className="row mt-2">
                 <div className="col">
                     <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                 </div>
                 <div className="col">
                     <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                 </div>
             </div>
        </div>
        
        <div className="mt-3">
            <span className="">Số điện thoại</span>
            <div className="row mt-2">
                 <div className="col">
                     <input type="text" className="form-control" value="0327861693" aria-label="First name" disabled/>
                 </div>
             </div>
        </div>

        <div className="mt-3">
            <span className="">Sinh nhật</span>
            <div className="row mt-2">
                 <div className="col">
                     <input type="text" className="form-control"  aria-label="First name" value="30-11-2000" disabled/>
                 </div>
             </div>
        </div>

        <div className="mt-3">
            <span className="">Email</span>
            <div className="row mt-2">
                 <div className="col">
                     <input type="text" className="form-control"  aria-label="First name" disabled/>
                 </div>
             </div>
        </div>
         <Form className="mt-3">
             <Form.Check
                 inline
                 label="Nam"
                 name="group1"
                 type="radio"
                 id="default-nam"
                
             />
          
             <Form.Check
                 inline
                 label="Nữ"
                 name="group1"
                 type="radio"
                 id="default-nu" 
             />
         </Form>
     </div>   
    )
}