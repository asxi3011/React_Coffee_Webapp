import React,{useState,useEffect} from 'react'
import SuccessReply from './SuccessReply';
import FailReply from './FailReply';
function Reply({order}){
    const [message,setMessage] = useState('Theo dõi đơn hàng của bạn bằng cách nhập mã đơn hàng vào mục phía trên.');
    const messageFail = `Chúng tôi không tìm thấy đơn hàng của bạn. Mã đơn hàng không hợp lệ vui lòng hoặc đã hết hạn. 
    Vui lòng kiểm tra lại mã đơn hàng`
    useEffect(()=>{
        console.log(order);
        if(order.status===undefined){
            setMessage("Theo dõi đơn hàng của bạn bằng cách nhập mã đơn hàng vào mục phía trên.");
        }else{
            order.status==="success" ? setMessage("Thanh2 cong6") : setMessage(messageFail);
        }
    },[order])
    console.log(order)
    return(
        order.status==="success"?
        <SuccessReply order={order}/> :
        <FailReply message={message}/>
    )
}

export default Reply