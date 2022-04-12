import { Link } from "react-router-dom";
import { React ,memo,useState,useEffect} from "react"
import {getNews,getStatusLoading,getProductsInTea,getProductsInCoffee,getProductsInHome,getProductsInCake,getProductsInFreeze } from "../redux/selector";
import ListProduct from "./ListProduct/index";
import { useSelector,useDispatch} from 'react-redux';
import Slider from './Slider'
import ListCategory from './ListCategory/index'
import newsSlice from "./News/newsSlice";
import Loading from './Loading'

import ListNews from './ListNews/index'

function Home() {
    
    const coffeeProduct = useSelector(getProductsInCoffee);
    const teaProduct = useSelector(getProductsInTea);
    const homeProduct = useSelector(getProductsInHome);
    const cakeProduct = useSelector(getProductsInCake);
    const freezeProduct = useSelector(getProductsInFreeze);
    const [checked,setChecked] = useState('bánh ngọt');
    const loaded = useSelector(getStatusLoading);
    const listNews = useSelector(getNews);
    console.log('oknew',coffeeProduct);
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
    return (
        <>
            <div className="pd-header">
                <Slider/>
                <div className="container-fluid">
                    <div className="pd-w-100 section-Chapter">
                        <div className="preview-Menu">
                            <div className="text-center fs-3 mb-3 mt-3">
                                <span>
                                    <i className="fas fa-trophy color-primary fs-4" />
                                </span>
                                Sản phẩm từ Nhà
                            </div>
                         
                            <ListCategory checked={checked} setChecked={setChecked}/>
                          
                        </div>
                        
                        {<ListProduct products={getList()} length={12} />}
                    </div>
                </div>
                { <ListNews news={listNews}/> }

            </div>
            <Loading status={loaded}/>
        </>
        
    )
}


export default memo(Home)