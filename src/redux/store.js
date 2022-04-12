import { configureStore } from "@reduxjs/toolkit";
// import filterSlice from "../components/Filters/FiltersSlice";
// import todoSlice from "../components/TodoList/TodosSlice";
import categoriesSlice from "../components/ListCategory/categoriesSlice";
import categorySlice from "../components/Category/categorySlice"
import loadingSlice from "../components/Loading/loadingSlice"
import newsSlice from "../components/News/newsSlice"
import detailProductSlice from '../components/DetailProduct/detailProductSlice'
import quantitiesCartSlice from "../components/QuantitiesCart/quantitiesCartSlice"
import cartSlice from '../components/Cart/cartSlice'

const store = configureStore({
    reducer:{
        categories: categoriesSlice.reducer,
        category : categorySlice.reducer,
        loading : loadingSlice.reducer,
        news: newsSlice.reducer,
        detailProduct:detailProductSlice.reducer,
        quantitiesCart: quantitiesCartSlice.reducer,
        cart:cartSlice.reducer,
        // Products: ,
        // Product: ,
        // GetOrder: ,

    }
})
export default store;