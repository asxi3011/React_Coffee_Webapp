
import { Link } from "react-router-dom";
import { React ,memo,useState,useEffect} from "react"
import {getNews,getStatusLoading,getProductsInTea,getProductsInCoffee,getProductsInHome,getProductsInCake,getProductsInFreeze } from "../redux/selector";
import ListProduct from "./ListProduct/index";
import { useSelector,useDispatch} from 'react-redux';
import Slider from './Slider'
import ListCategory from './ListCategory/index'
import newsSlice from "./News/newsSlice";
import Loading from './Loading'
import ListNews from "./ListNews";
export default function PageNews(){
    const listNews = useSelector(getNews);
  

    return(
    
        <div className="pd-header">
            <div className="container-fluid">
                <div className="pd-w-100 section-Chapter">
                  
                    
                { <ListNews news={listNews}/> }
                </div>
            </div>

        </div>
    
    )
}