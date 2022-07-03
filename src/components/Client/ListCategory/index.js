
import { Link } from "react-router-dom";
import { React, memo,useState,useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Category from "../Category/index";

import {getCategories,getProducts} from "../../../redux/selector"


import axios from "axios";
function ListCategory({checkedName,showParams}) {
    const dispatch = useDispatch();
    const data =useSelector(getCategories);

    return (
        <div className="d-flex flex-wrap justify-content-center list-category pd-t-50 divTest">
            {data.length > 0 ?
            data.map((category,index)=>{
            return <Category category={category} checkedName={checkedName===category.nameCategory || checkedName===category.slug}  key={index} showParams={showParams}/>
            })
            :''}
        </div>
    )
}

export default ListCategory