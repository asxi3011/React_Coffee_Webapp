import { createSlice } from '@reduxjs/toolkit'
export default createSlice({
    name:'loading',
    initialState:{
        loading:false,   
    },
    reducers:{
        toggleLoading: (state,action)=>{
            state.loading = !state.loading;
           return state;
        }
        
       
    }
})