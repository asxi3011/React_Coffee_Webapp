

import { React,useEffect} from "react"


import { useSelector} from 'react-redux';
import Profile from "../components/Client/Profile";

export default function PageProfile(){
  
    return(
    
        <div className="pd-header">
            <div className="container-fluid">
                <div className="pd-w-100 section-Chapter">
                <div className="text-center fs-3">
                        <i className="fas fa-newspaper fs-4 color-primary" /> Đăng nhập
                </div>
             
                 <Profile />
            
                </div>
            </div>

        </div>
    
    )
}