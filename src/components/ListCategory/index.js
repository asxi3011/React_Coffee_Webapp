
import { Link } from "react-router-dom";
import { React, memo,useState,useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import Category from "../Category/index";
import categoriesSlice from "./categoriesSlice";
import {getCategories} from "../../redux/selector"
import {fetchCategory} from "../../redux/actions"
import {fetchCategoryRequest} from "../../redux/callApi"
import axios from "axios";
function ListCategory({checked,setChecked,showParams}) {
    const dispatch = useDispatch();
    const data =useSelector(getCategories);
    useEffect(() => {
        const listCateogry = fetchCategoryRequest();
        listCateogry.then(data=>{
            dispatch(categoriesSlice.actions.fetchCategory(data));
        })

    },[])
    
    
    return (
        <div className="d-flex flex-wrap justify-content-center list-category pd-t-50 divTest">
            {data.length > 0 ?
            data.map((category,index)=>{
            return <Category category={category} checked={checked===category.nameCategory || checked===category.slug} setChecked={setChecked} key={index} showParams={showParams}/>
            })
            :''}
        </div>
    )
}

export default ListCategory