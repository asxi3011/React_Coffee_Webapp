
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import GlobalStyles from './components/GlobalStyles/index'
import './components/css/Style.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useSelector,useDispatch} from 'react-redux';


import cartSlice from './components/Cart/cartSlice';
import Home from './components/Home';
import { getStatusCoupon } from './redux/selector';
import Header from './components/Header/index'
import DetailProduct from './components/DetailProduct/index';
import Cart from './components/Cart/index'
import CheckOrder from './components/CheckOrder';
import PageProduct from './components/PageProduct';
import PageNews from './components/PageNews'
import DetailNew from './components/DetailNew/index'
import loadingSlice from "./components/modalSlice";
import {fetchNewsRequest} from './redux/callApi'
import newsSlice from "./components/News/newsSlice";
import ModalCoupon from './components/ModalCoupon/index'
function App() {
  // const [loading,setLoading] = useState(true);
  // const [categorys, setCategorys] = useState([])
  // const [news, setNews] = useState([])
  // const [products, setProducts] = useState([]);
  // const [coupon,setCoupon] = useState(localStorage.getItem('coupon'));
  // const [localCount,setLocalCount] = useState(JSON.parse(localStorage.getItem('countQuanity')) || 0);

  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadingSlice.actions.toggleLoading())
      const quantities= localStorage.getItem('countQuanity') || 0
      const cart= localStorage.getItem('arrayCart') || []
      const nameCus = localStorage.getItem('nameCus')  || ''
      const phoneCus = localStorage.getItem('phoneCus') || ''
      const emailCus = localStorage.getItem('emailCus') || ''
      const addressCus = localStorage.getItem('addressCus') || ''
      const noteCus = localStorage.getItem('noteCus') || ''
      if(cart.length>0){
        dispatch(cartSlice.actions.updateCart(cart))
        dispatch(cartSlice.actions.setQuantities(quantities))
      }
      dispatch(cartSlice.actions.setEmail(emailCus))
      dispatch(cartSlice.actions.setNameCustomer(nameCus))
      dispatch(cartSlice.actions.setPhone(phoneCus))
      dispatch(cartSlice.actions.setAddress(addressCus))
      dispatch(cartSlice.actions.setNote(noteCus))

      const listNews = fetchNewsRequest();
      listNews.then(data=>{
      dispatch(newsSlice.actions.fetchNewsRequest(data))
      dispatch(loadingSlice.actions.toggleLoading())
    }, [])
  })

  return (
    <GlobalStyles >
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:slug" element={<DetailProduct/>} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkOrder" element={<CheckOrder />} />
          <Route path="/:slug" element={<PageProduct />} />
          <Route path="/news" element={<PageNews />} />
          <Route path="/news/:slug" element={<DetailNew />} />
        </Routes>
        <ModalCoupon />
      </div>
    </GlobalStyles>
  );
}
  {/* <Header localCount={localCount} setCoupon={setCoupon}/>
        <Routes>
          <Route path="/" element={<Home categorys={categorys} products={products} news={news} />} />
      
          <Route path="/news/:slug" element={<NewId />} />
          <Route path="/:slug" element={<ProductInCategory setLoading={setLoading} categorys={categorys} />} />
          <Route path="/product/:slug" element={<DetailProduct setLocalCount={setLocalCount}/>} />
          
          <Route path="/cart" element={localCount> 0 ?<ShopingCart setLocalCount={setLocalCount} coupon={coupon}/>: <ThongBao></ThongBao>} />
        </Routes>
        <Footer />
        <Loading status={loading}/> */}
export default App;
