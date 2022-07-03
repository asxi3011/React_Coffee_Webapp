import { configureStore } from "@reduxjs/toolkit";
// import filterSlice from "../components/Filters/FiltersSlice";
// import todoSlice from "../components/TodoList/TodosSlice";
import categoriesSlice from "../components/Client/ListCategory/categoriesSlice";
import categorySlice from "../components/Client/Category/categorySlice"
import modalSlice from "../components/Client/Modal/modalSlice"
import newsSlice from "../components/Client/News/newsSlice"
import productSlice from "../components/Client/Product/productSlice"
import cartSlice from '../components/Client/Cart/cartSlice'
import searchSlice from "../components/Client/Search/searchSlice";
import tokenSlice from "../components/Client/Token/tokenSlice";
const store = configureStore({
    reducer:{
        categories: categoriesSlice.reducer,
        category : categorySlice.reducer,
        search:searchSlice.reducer,
        product: productSlice.reducer,
        modal : modalSlice.reducer,
        news: newsSlice.reducer,
        cart:cartSlice.reducer,
        token:tokenSlice.reducer,
        // Products: ,
        // Product: ,
        // GetOrder: ,

    }
})
export default store;