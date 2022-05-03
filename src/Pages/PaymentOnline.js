
import { Link,useSearchParams} from "react-router-dom";
import { React ,memo,useState,useEffect} from "react"
import {Alert,Button} from'react-bootstrap'
import NotFound from '../components/Partials/NotFound';

import axios from 'axios';

export default function PagePaymentOnline(){
    
    let [searchParams, setSearchParams] = useSearchParams();
    let [amount,setAmount] = useState(searchParams.get('vnp_Amount'));
    let [dateCreate,setDateCreate] = useState(searchParams.get('vnp_PayDate'));
    let [responCode,setResponCode] = useState(searchParams.get('vnp_ResponseCode'));
    let [dateConvert,setDateConvert] = useState({})
    let [response,setResponse] = useState({
        variant:'success',
        title:'Giao dịch thành công!',
        image:'https://icons.veryicon.com/png/o/miscellaneous/8atour/submit-successfully.png',
        message:'Cảm ơn quý khách đã thanh toán thành công đơn hàng. Chúng tôi sẽ giao hàng nhanh nhất có thể'
    });
    
    useEffect(() => {
       if(responCode !== null){
           if(responCode == '00'){
                 axios.post('')
               
           }
           else{
            setResponse({
                variant:'danger',
                title:'Giao dịch thất bại!',
                image:'https://icons.veryicon.com/png/o/miscellaneous/8atour/confirm-20x20-now.png',
                message:'Đơn hàng thanh toán thất bại, quý khách vui lòng thử lại'
            })
           }
           setDateConvert(convertDate(dateCreate))
           
       }
    },[responCode])
    function convertDate(date){
        var year =  date.substr(0,4);
        var month =  date.substr(4,2);
        var day =  date.substr(6,2);
        var hour =  date.substr(8,2);
        var min =  date.substr(10,2)
        var second =  date.substr(12,2);
        const dateO={
            year,
            month,
            day,
            hour,
            min,
            second
        }
        return dateO
    }
    function clearCart() {
        sessionStorage.removeItem("arrayCart");
        sessionStorage.removeItem("countQuanity");
    }
    return(
        responCode ?
        <div className="pd-header">
        <div className="container-fluid">
            <div className="row my-3">
                <div className="d-flex justify-content-center mt-5">      
                    <div className="col-6 p-4 text-center">
                    <Alert show={true} variant={response.variant}>
                    <Alert.Heading>{response.title}</Alert.Heading>
                  
                    <img style={{with:35,height:35}} src={response.image}/>
                  
                   
                    <div className="my-2 fst-italic">
                       {response.message}. 
                     
                    </div>
                     <div className="w-50 mx-auto">
                    <p className='d-flex justify-content-between'>
                        <span>ID đơn hàng</span>
                        <span>12345</span>
                    </p>
                    <p className='d-flex justify-content-between'>
                        <span>Thời gian giao dịch</span>
                        <span>{`${dateConvert.day}/${dateConvert.month}/${dateConvert.year} ${dateConvert.hour}:${dateConvert.min}`}</span>
                    </p>
                    <p className='d-flex justify-content-between'>
                        <span>Giá tiền</span>
                        <span>{(amount/100).toLocaleString()}</span>
                    </p>
                    <hr />
                    </div>
                    <Link to='/'>
                        <Button variant={`outline-${response.variant}`}>
                            Trở về trang chủ
                        </Button>
                    </Link>
                    <div className='mt-3'>
                       Hotline : 1900565656.
                    </div>
                    </Alert>
                          
                        
                           
                    </div>
                </div>
            </div>
    
        </div>
         </div>
        : <NotFound/>
    )
}