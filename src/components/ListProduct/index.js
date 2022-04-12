import { Link} from "react-router-dom";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useState,useCallback} from 'react'
import CardProduct from "../Product";
function ListProduct({products,length}){
    const list = products.list;
    const name = products.name;
    const slug = products.slug;
    const limitProducts = ()=>{
        return list.filter((ele,index)=>index<length)
    }
    const checkContinues = ()=> list.length > length ? true : false;
    
    return (
        list.length>0 ?
        <>
        <div className="preview-Product mt-5">
            <div className="row my-3">
                {limitProducts().length>0
                ? limitProducts().map(product => <CardProduct key={product._id} product={product} />)
                : list.map(product => <CardProduct key={product._id} product={product} />)}
            </div>
           
        </div>
        {   
            checkContinues() ?
            <div className="text-center">
                {console.log('productsne',products)}
            <Link to={`/${slug}`} className="a-none color-primary fs-6">
                Xem tất cả <i className="fas fa-arrow-right" />
            </Link>
           </div>
             :''
        }
      
        </>
        :
         ''
        
    )
}

export default ListProduct