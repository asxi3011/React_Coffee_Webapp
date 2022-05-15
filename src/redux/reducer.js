import {combineReducers}from 'redux'
// import filtersReducer from "../components/Filters/FiltersSlice";
// import todosReducer from "../components/TodoList/TodosSlice";
import categorySlice from "../components/Category/categorySlice"
import categoriesReducer from "../components/ListCategory/categoriesSlice"
import modalSlice from "../components/Modal/modalSlice"              
import newsSlice from '../components/News/newsSlice'
import productSlice from '../components/Product/productSlice'
import cartSlice from '../components/Cart/cartSlice'
import searchSlice from '../components/Search/searchSlice'
const rootReducer = combineReducers({
    categories: categoriesReducer,
    category: categorySlice,
    product: productSlice,
    search:searchSlice,
    modal: modalSlice,
    news:newsSlice,
    cart:cartSlice,
})
export default rootReducer;

