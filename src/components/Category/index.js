
import { Link } from "react-router-dom";
import { React, memo,useState,useEffect} from "react"
import {useDispatch,useSelector} from 'react-redux'
import {fetchProductInCategoryRequest} from '../../redux/callApi'
import categorySlice from "./categorySlice";
import loadingSlice from "../modalSlice";
import { getProductInCategory,getProductsInTea,getProductsInCoffee,getProductsInHome,getProductsInCake,getProductsInFreeze } from "../../redux/selector";

function Category({category,checked,setChecked,index,showParams}) {
  
    const dispatch = useDispatch();
    const coffeeProduct = useSelector(getProductsInCoffee); 
    const teaProduct = useSelector(getProductsInTea);
    const homeProduct = useSelector(getProductsInHome);
    const cakeProduct = useSelector(getProductsInCake);
    const freezeProduct = useSelector(getProductsInFreeze);
    const myStore = useSelector(getProductInCategory);
    useEffect(() => {
        return checked ? handlerClickCategory() : null
    },[])
    function fect_Data(){
        dispatch(loadingSlice.actions.toggleLoading())
        const listProduct = fetchProductInCategoryRequest(category.slug);
        listProduct.then(data=>{
            const nameAndList = {
                name:category.nameCategory,
                list:data,
                slug:category.slug,
            }
            dispatch(categorySlice.actions.fetchProductInCategory(nameAndList));
            console.log('Done Load product');
            dispatch(loadingSlice.actions.toggleLoading());
        })
        
    }
    const handlerClickCategory = ()=>{
        setChecked(category.nameCategory);
        dispatch(categorySlice.actions.changeCategory(category.nameCategory));
        switch (category.nameCategory){
            case 'cà phê':
                 return coffeeProduct.list.length>0 ? null : fect_Data()
            case 'trà':
                 return teaProduct.list.length>0 ? null : fect_Data()
            case 'thưởng thức tại nhà':
                 return homeProduct.list.length>0 ? null : fect_Data()
            case 'đá xay':
                 return freezeProduct.list.length>0 ? null : fect_Data()
            case 'bánh ngọt':
                 return cakeProduct.list.length>0 ? null : fect_Data()
            default:
                return null
        } 
       
    }
    return (
        showParams ?
            <Link to={`/${category.slug}`} onClick={handlerClickCategory} className="item-category a-none">
                <div className="" >
                    <div className={checked ? 'background-primary image-cateogry rounded-circle m-auto' :'image-cateogry rounded-circle m-auto'}>
                        <img
                            className="h-100"
                        
                            src={`https://sever-coffeehouse.herokuapp.com/uploads/${category.imageCategory}`}
                            alt="category"
                        />
                    </div>
                    <div className={checked ? 'fs-6 text-center text-disable text-coffe my-2 color-primary fw-bold' : 'fs-6 text-center text-disable text-coffe my-2'} >
                        {category.nameCategory}
                    </div>
                </div>
            </Link>
        :
            <div onClick={handlerClickCategory} className="item-category a-none">
                <div className="" >
                    <div className={checked ? 'background-primary image-cateogry rounded-circle m-auto' :'image-cateogry rounded-circle m-auto'}>
                        <img
                            className="h-100"
                        
                            src={`https://sever-coffeehouse.herokuapp.com/uploads/${category.imageCategory}`}
                            alt="category"
                        />
                    </div>
                    <div className={checked ? 'fs-6 text-center text-disable text-coffe my-2 color-primary fw-bold' : 'fs-6 text-center text-disable text-coffe my-2'} >
                        {category.nameCategory}
                    </div>
                </div>
            </div>
           
        
    )
}

export default memo(Category)