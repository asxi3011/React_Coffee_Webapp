import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name:'cart',
    initialState:[
       
    ]
    ,
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload);
        },
        deleteItem:(state,action)=>{
            state.slice(action.payload,1);
        },
        updateItem:(state,action)=>{
            state.slice(action.payload.index,1,action.payload.item);
        },
        updateCart:(state,action)=>{
            console.log('type',typeof(action.payload))
            state = JSON.parse(action.payload);
            return state;
        }
    }
})