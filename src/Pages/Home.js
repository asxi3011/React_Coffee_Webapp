
import { React ,memo,useState} from "react"
import { useSelector} from 'react-redux';
import Slider from '../components/Partials/Slider'
import ListCategory from '../components/ListCategory'
import Loading from '../components/Partials/Loading'

import ListProduct from "../components/ListProduct";
import ListNews from '../components/ListNews'

import {getNews,getStatusLoading,getProductsInTea,getProductsInCoffee,getProductsInHome,getProductsInCake,getProductsInFreeze } from "../redux/selector";
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
              
                <div className="container-fluid">
                    <div className="pd-w-100">
                    <Slider/>
                    </div>
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
                        <div className="text-center fs-3">
                        <i className="fas fa-newspaper fs-4 color-primary" /> Tin tức
                </div>
                    
                { <ListNews news={listNews}/> }
                    </div>
                    
                </div>
            
             
              
        

            </div>
            <Loading status={loaded}/>
            <iframe style={{width:'100%',height:'1000px',border: 'none', 'max-width': '100%'}} frameborder="0" allowfullscreen allow="xr-spatial-tracking" scrolling="no" src="https://kuula.co/share/collection/7v7sc?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe>
        </>
        
    )
}


export default memo(Home)