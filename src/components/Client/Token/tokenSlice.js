import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:'token', 
    initialState:{
        tokenAhamove:'',
        tokenUser:'',
    },
    reducers:{
        fetchTokenAhamove: (state,action)=>{
            state.tokenAhamove = action.payload;
            return state;
        }
    }
})