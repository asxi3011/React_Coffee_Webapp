import { createSlice } from '@reduxjs/toolkit'
export default createSlice({
    name:'modal',
    initialState:{
        loading:false,   
        coupon:false
    },
    reducers:{
        toggleLoading: (state,action)=>{
            state.loading = !state.loading;
           return state;
        },
        setCoupon: (state,action)=>{
            state.coupon = (action.payload);
           return state;
        }

           
    }
})