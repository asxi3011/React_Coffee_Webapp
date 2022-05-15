
import { Link } from "react-router-dom";
import { React, memo} from "react"
import {useDispatch,useSelector} from 'react-redux'

import categorySlice from "./categorySlice";


function Category({category,checkedName,showParams}) {
  
    const dispatch = useDispatch();

    const handlerClickCategory = ()=>{
        dispatch(categorySlice.actions.changeCategory(category.nameCategory)); 
    }

    return (
        showParams ?
            <div  className="item-category a-none">
             
                    <Link to={`/${category.slug}`} onClick={handlerClickCategory} className={checkedName ? 'background-primary pe-cursor image-cateogry rounded-circle m-auto' :'image-cateogry pe-cursor rounded-circle m-auto'}>
                        <img
                            className="h-100"
                            src={`https://sever-coffeehouse.herokuapp.com/uploads/${category.imageCategory}`}
                            alt="category"
                        />
                    </Link >
                    <div className={checkedName ? 'fs-6 text-center text-disable text-coffe my-2 color-primary fw-bold' : 'fs-6 text-center text-disable text-coffe my-2'} >
                        {category.nameCategory}
                    </div>
              
            </div>
        :
            <div className="item-category a-none">
              
                    <div onClick={handlerClickCategory}  className={checkedName ? 'background-primary pe-cursor  image-cateogry rounded-circle m-auto' :'image-cateogry pe-cursor rounded-circle m-auto'}>
                        <img
                            className="h-100"
                        
                            src={`https://sever-coffeehouse.herokuapp.com/uploads/${category.imageCategory}`}
                            alt="category"
                        />
                    </div>
                    <div className={checkedName ? 'fs-6 text-center text-disable text-coffe my-2 color-primary fw-bold' : 'fs-6 text-center text-disable text-coffe my-2'} >
                        {category.nameCategory}
                    </div>
            
            </div>
           
        
    )
}

export default memo(Category)