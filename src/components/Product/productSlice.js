import {createSlice} from '@reduxjs/toolkit'
export default createSlice({
    name:'products',
    initialState:[],
    reducers:{
        fetchProductsRequest:(state,action)=>{
            state = action.payload;
            return state;
        }
    }
})