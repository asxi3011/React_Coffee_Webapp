import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react"
function Cart({localCount}) {
   
    
    useEffect(()=>{
        let aroundRed = document.querySelector(".quantities-cart")
        let qty = document.getElementById("soLuong_Cart")
        if (localCount >= 1) {
            qty.innerHTML = localCount
            aroundRed.classList.remove("d-none");
        } else {
            aroundRed.classList.add("d-none");
        }
    })
    
    return (
        <>
            <div className=" ">

                <Link to="/cart" className="btn-40 bg-white d-flex rounded-circle btn-cart">
                    <i className="fas fa-shopping-bag color-primary m-auto fs-4" />
                    <div className="quantities-cart  rounded-circle fs-min-mini d-flex">
                        <div className="m-auto" id="soLuong_Cart"  ></div>
                    </div>
                </Link>

            </div>
            
        </>
    )
}

export default Cart