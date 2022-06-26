
import Loading from './Loading'
import React from 'react'
import logo from '../../logoCoffee.gif'
export default function Waitting() {
    return(
        <div className="d-flex vw-100 vh-100">
        <img className="m-auto w-100 h-100" src={logo}></img>
        <Loading status={true}/>
        </div>
    )
}