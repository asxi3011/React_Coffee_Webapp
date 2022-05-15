import { createSlice } from '@reduxjs/toolkit'
export default createSlice({
    name:'category',
    initialState:{
        products:[],
        checked:'cà phê',
    },
    reducers:{
        fetchProductInCategory: (state,action)=>{
            
            state.products = action.payload;
            return state;
        },
        changeCategory: (state,action)=>{
            state.checked = action.payload
            return state
        }
    }
})