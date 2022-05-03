
import React, {  useEffect } from 'react';
import { Routes, Route } from "react-router-dom";


import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Style.css'
import './App.css'
import { useDispatch} from 'react-redux';

//Pages
import Home from './Pages/Home';
import DetailProduct from './Pages/DetailsProduct';
import DetailNew from './Pages/DetailsNews'
import PageProduct from './Pages/Product';
import PageNews from './Pages/News'
import PaymentOnline from './Pages/PaymentOnline'
import Cart from './Pages/Cart'
import CheckOrder from './Pages/checkOrder';
//Components
import cartSlice from './components/Cart/cartSlice';
import newsSlice from "./components/News/newsSlice";
import Header from './components/Partials/Header'
import loadingSlice from "./components/Modal/modalSlice";
import ModalCoupon from './components/Modal/ModalCoupon'
//redux
import { getStatusCoupon } from './redux/selector';
import {fetchNewsRequest} from './redux/callApi'
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
  
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:slug" element={<DetailProduct/>} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/paymentOnline" element={<PaymentOnline />} />
          <Route path="/checkOrder" element={<CheckOrder />} />
          <Route path="/:slug" element={<PageProduct />} />
          <Route path="/news" element={<PageNews />} />
          <Route path="/news/:slug" element={<DetailNew />} />
        </Routes>
        <ModalCoupon />
      </div>
 
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
