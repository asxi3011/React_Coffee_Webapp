import {combineReducers}from 'redux'
// import filtersReducer from "../components/Filters/FiltersSlice";
// import todosReducer from "../components/TodoList/TodosSlice";
import categorySlice from "../components/Category/categorySlice"
import categoriesReducer from "../components/ListCategory/categoriesSlice"
import loadingSlice from "../components/Loading/loadingSlice"              
import newsSlice from '../components/News/newsSlice'
import detailProductSlice from '../components/DetailProduct/detailProductSlice'
import quantitiesCartSlice from "../components/QuantitiesCart/quantitiesCartSlice"
import cartSlice from '../components/Cart/cartSlice'
const rootReducer = combineReducers({
    categories: categoriesReducer,
    category: categorySlice,
    loading: loadingSlice,
    news:newsSlice,
    detailProduct:detailProductSlice,
    quantitiesCart:quantitiesCartSlice,
    cart:cartSlice,
})
export default rootReducer;

