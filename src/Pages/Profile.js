import React from 'react';
import {useState,useEffect} from 'react'
import MenuProfile from '../components/MenuProfile'
import InfoUser from '../components/InfoUser'
import {authentication} from '../Firebase/config'
import {signOut} from 'firebase/auth'
import {useNavigate} from"react-router-dom";
import $ from 'jquery'
export default function Profile(){
    const prevUser = authentication.currentUser;
    const navigate = useNavigate();
    useEffect(() => {
        if(prevUser){
            console.log("pre",prevUser)
        }else{
            navigate("../login")
        }
    },[])
    
    const handleLogout = ()=>{
        signOut(authentication).then(() => {
            alert("log out success")
            navigate("../login")
          }).catch((error) => {
            // An error happened.
          });
    }
    return(
    <>
         <div className="pd-header">
            <div className="container-fluid">
                <div className="pd-y-220 section-Chapter">
                    <div className="fs-3 d-flex align-items-center justify-content-center gap-2">
                            <i className="fa-solid fa-user fs-4 color-primary" /> 
                            <span className="fw-bold">Tài khoản của bạn</span>
                    </div>
                    <div className="row d-flex justify-content-between gap-120 mt-5">
                        <MenuProfile/>                         
                        <InfoUser/>                  
                    </div>     
                </div>
            </div> 
            <div className="btn btn-primary" onClick={handleLogout}>
                    Log out
            </div>

        </div>
    
    </>
    )
}