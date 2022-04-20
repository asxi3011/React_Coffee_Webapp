import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name:'cart',
    initialState:{
        listItem:[],
        quantities:0,
        coupon:'',
        nameCustomer:'',
        address: '',
        phone:'',
        email:'',
        priceCoupon:0,
        priceTotal:0,
        priceAll:0,
        note:'',
        payments:'Tiền mặt',
    }
    ,
    reducers:{
        updateCart:(state,action)=>{
            
            state.listItem = JSON.parse(action.payload);
            
            return state;
        },
        setQuantities:(state,action)=>{
            state.quantities = action.payload;
            return state;
        },
        setCoupon:(state,action)=>{
            state.coupon = action.payload;
            return state;
        },
        setNameCustomer:(state,action)=>{
            state.nameCustomer = action.payload;
            return state;
        },
        setAddress:(state,action)=>{
            state.address = action.payload;
            return state;
        },
        setPhone:(state,action)=>{
            state.phone = action.payload;
            return state;
        },
        setEmail:(state,action)=>{
            state.email = action.payload;
            return state;
        },
        setNote:(state,action)=>{
            state.note = action.payload;
            return state;
        },
        changePayments:(state,action)=>{
            state.payments = action.payload;
            return state;
        }
    }
})