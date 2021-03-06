
import { React ,memo,useState,useEffect} from "react"
import { useSelector,useDispatch} from 'react-redux';
import Slider from '../components/Client/Partials/Slider'
import ListCategory from '../components/Client/ListCategory'
import {useGetUser} from "../hooks/useGetUser"
import {authentication} from "../Firebase/config"
import ListProduct from "../components/Client/ListProduct";
import ListNews from '../components/Client/ListNews'
import {useUser} from "../hooks/useUser"
import usersSlice from "../components/Client/Login/usersSlice";
import cartSlice from "../components/Client/Cart/cartSlice";

import {getNews,getStatusLoading,getListChecked,getCategoryChecked} from "../redux/selector";
function Home() {
    const listNews = useSelector(getNews);
    const products = useSelector(getListChecked)
    const checkedName = useSelector(getCategoryChecked);
    const [useruid,setUseruid] = useState();
    const dispatch = useDispatch();
    const user = useUser(useruid);
    console.log("IF",user)
    useEffect(()=>{
        authentication.onAuthStateChanged(function (user) {
            if (user) {
                setUseruid(user.uid);
            } else {
                setUseruid("");
            }
          });
    },[])
    useEffect(()=>{
        if(user){
            dispatch(
                usersSlice.actions.setUser(user)
              );
              dispatch(cartSlice.actions.setEmail(user.email));
              dispatch(cartSlice.actions.setNameCustomer(user.lastName+user.name));
              dispatch(cartSlice.actions.setPhone(user.phone));
              dispatch(cartSlice.actions.setAddress(user.address));
        }else{
            dispatch(
                usersSlice.actions.setUser("")
              );
              dispatch(cartSlice.actions.setEmail(""));
              dispatch(cartSlice.actions.setNameCustomer(""));
              dispatch(cartSlice.actions.setPhone(""));
              dispatch(cartSlice.actions.setAddress(""));
        }
    },[user,dispatch])
    return (
        products.list.length> 0 ?
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
                                Sa??n ph????m t???? Nha??
                            </div>
                         
                            <ListCategory checkedName={checkedName} />
                          
                        </div>
                        
                         {<ListProduct products={products} length={12} />} 
                        <div className="text-center fs-3">
                        <i className="fas fa-newspaper fs-4 color-primary" /> Tin t????c
                </div>
                    
                { <ListNews news={listNews}/> }
                    </div>
                    
                </div>
            </div>
          
            {/* <iframe style={{width:'100%',height:'1000px',border: 'none', 'maxWidth': '100%'}} frameBorder="0" allowFullScreen allow="xr-spatial-tracking" scrolling="no" src="https://kuula.co/share/collection/7v7sc?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1"></iframe> */}
        </>
        : ''
    )
}


export default memo(Home)