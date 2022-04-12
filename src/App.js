
import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import GlobalStyles from './components/GlobalStyles/index'
import './components/css/Style.css'
import './App.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { useDispatch} from 'react-redux';
import categoriesSlice from './components/ListCategory/categoriesSlice';
import quantitiesCartSlice from './components/QuantitiesCart/quantitiesCartSlice';
import cartSlice from './components/Cart/cartSlice';
import Home from './components/Home';
import axios from 'axios';
import Header from './components/Header/index'
import DetailProduct from './components/DetailProduct/index';
import Cart from './components/Cart/index'
import CheckOrder from './components/CheckOrder';
import PageProduct from './components/PageProduct';
import PageNews from './components/PageNews'
import DetailNew from './components/DetailNew/index'
import loadingSlice from "./components/Loading/loadingSlice";
import {fetchNewsRequest} from './redux/callApi'
import newsSlice from "./components/News/newsSlice";
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
      const quantities= localStorage.getItem('countQuanity')
      const cart= localStorage.getItem('arrayCart')
      dispatch(quantitiesCartSlice.actions.setQuantitiesCart(quantities))
      console.log(cart);
      dispatch(cartSlice.actions.updateCart(cart))
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
