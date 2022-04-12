
import { Link,useParams} from "react-router-dom";
import { React ,memo,useState,useEffect} from "react"
import {getNews,getStatusLoading,getProductsInTea,getProductsInCoffee,getProductsInHome,getProductsInCake,getProductsInFreeze } from "../redux/selector";
import ListProduct from "./ListProduct/index";
import { useSelector,useDispatch} from 'react-redux';
import Slider from './Slider'
import ListCategory from './ListCategory/index'
import newsSlice from "./News/newsSlice";
import Loading from './Loading'

export default function PageProduct({nameSelected}){
    const dispatch = useDispatch();
    const {slug} = useParams();
    console.log(slug);
    const coffeeProduct = useSelector(getProductsInCoffee);
    const teaProduct = useSelector(getProductsInTea);
    const homeProduct = useSelector(getProductsInHome);
    const cakeProduct = useSelector(getProductsInCake);
    const freezeProduct = useSelector(getProductsInFreeze);
    const [checked,setChecked] = useState(slug);
    const loaded = useSelector(getStatusLoading);
    function getList(){
        if(coffeeProduct.checked){
            return {name:coffeeProduct.name,list:coffeeProduct.list,slug:coffeeProduct.slug};
        }
        if(teaProduct.checked){
            return {name:teaProduct.name,list:teaProduct.list,slug:teaProduct.slug};
        }
        if(homeProduct.checked){
            return {name:homeProduct.name,list:homeProduct.list,slug:homeProduct.slug};
        }
        if(cakeProduct.checked){
            return {name:cakeProduct.name,list:cakeProduct.list,slug:cakeProduct.slug};
        }
        if(freezeProduct.checked){
            return {name:freezeProduct.name,list:freezeProduct.list,slug:freezeProduct.slug};
        }
        return {name:'',list:[]};
    }
 
  
    return(
        <>
        <div className="pd-header">
            <div className="container-fluid">
                <div className="pd-w-100 section-Chapter">
                    <div className="preview-Menu">
                        <div className="text-center fs-3 mb-3 mt-3">
                            <span>
                                <i className="fas fa-trophy color-primary fs-4" />
                            </span>
                            Sản phẩm từ Nhà
                        </div>
                     
                        <ListCategory checked={checked} setChecked={setChecked} showParams={true}/>
                      
                    </div>
                    
                    {<ListProduct products={getList()}/>}
                </div>
            </div>

        </div>
        <Loading status={loaded}/>
    </>
    )
}