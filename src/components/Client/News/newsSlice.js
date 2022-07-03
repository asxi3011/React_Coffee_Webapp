
import {createSlice} from '@reduxjs/toolkit'
export default createSlice({
    name:'news',
    initialState:[],
    reducers:{
        fetchNewsRequest:(state,action)=>{
            state = action.payload;
            return state;
        }
    }
})