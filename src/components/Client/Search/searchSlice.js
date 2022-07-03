import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name:'seacrh',
    initialState:'',
    reducers: {
        changeSearch:(state,action)=>{
            state = action.payload;
            return state
        }
    }
})