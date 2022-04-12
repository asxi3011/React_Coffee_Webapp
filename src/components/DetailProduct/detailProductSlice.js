import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name:'detailProduct',
    initialState : {
       info: '',
       note:'',
       quantities:1,
       priceTotal:0,
       currentPrice:0,
       sizeSelectedValue:0,
       sizeSelectedName:'',
    },
    reducers:{
        fetchDetailProductRequest: (state,action)=>{
            state.info = action.payload;
            return state
        },
        setQuantities: (state,action)=>{
            state.quantities = action.payload;
            return state;
        },
        updateCurrentPrice: (state,action)=>{
            state.currentPrice = action.payload;
        },
        updatePriceTotal: (state,action)=>{
            state.priceTotal = action.payload;
            return state;
        },
        updateNote: (state,action)=>{
            state.note = action.payload;
            return state;
        },
        changeSize: (state,action)=>{
            state.sizeSelectedValue = action.payload.value;
            state.sizeSelectedName = action.payload.name
            return state;
        }
        }
})

