import { configureStore } from "@reduxjs/toolkit";
// import filterSlice from "../components/Filters/FiltersSlice";
// import todoSlice from "../components/TodoList/TodosSlice";
import categoriesSlice from "../components/ListCategory/categoriesSlice";
import categorySlice from "../components/Category/categorySlice"
import modalSlice from "../components/Modal/modalSlice"
import newsSlice from "../components/News/newsSlice"

import cartSlice from '../components/Cart/cartSlice'

const store = configureStore({
    reducer:{
        categories: categoriesSlice.reducer,
        category : categorySlice.reducer,
        modal : modalSlice.reducer,
        news: newsSlice.reducer,
        cart:cartSlice.reducer,
        // Products: ,
        // Product: ,
        // GetOrder: ,

    }
})
export default store;