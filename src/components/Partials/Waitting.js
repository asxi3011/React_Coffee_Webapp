
import Loading from './Loading'
import React from 'react'

export default function Waitting() {
    return(
        <div className="d-flex vw-100 vh-100">
        <img className="m-auto w-100 h-100" src="https://i.pinimg.com/originals/2a/8e/97/2a8e976139a1373a0ffee6f15539ce29.gif"></img>
        <Loading status={true}/>
        </div>
    )
}