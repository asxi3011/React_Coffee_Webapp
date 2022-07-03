import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name:'quantitiesCart',
    initialState:0,
    reducers:{
        setQuantitiesCart:(state,action)=>{
            state = action.payload;
            return state;
        }
    }
})