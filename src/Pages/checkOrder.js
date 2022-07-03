import React, { useState } from 'react';
import Reply from '../components/Client/CheckOrder/Reply';



function CheckOrder(){
    const [id,setId]= useState("");
    const[datas,setData]=useState("")
    // const[trans,setTrans]=useState([])

    const Check = (e)=>{
        // e.preventDefault()
        fetch(`https://sever-coffeehouse.herokuapp.com/getOrder?id=${id}`)
        .then(res=>res.json())
        .then(order=>{  
            setData(order);
        })  
    }

    return(
        <div className="container-fluid pd-header">
        <div className="row"> 
        </div>
            <form action="/getOrder" >
                <div className="d-flex justify-content-center mt-5">
                    <div className="col-6 d-flex">
                        <input type="text" name="id" id="Input" onChange={(e)=>{console.log(e.target.value);setId(e.target.value)}}value={id}
                         className="form-control d-inline border-radius-none" placeholder="Nhập mã đơn hàng"/>
                        {/* <FindOut  dataFromParent ={trans} /> */}
                        <button type="Button" onClick={()=>Check(id)} className="btn bg-gradient-primary w-50 border-radius-none text-white">Theo dõi đơn
                            hàng</button>
                    </div>
                </div>
                <div>
                    <Reply order={datas}></Reply>
                </div>
            </form>

      
     
         </div>            
        )    
}

    
export default CheckOrder