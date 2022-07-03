
//---------- REDUX CORE--------------
// const initState = {
//     search: '',
//     status: 'All',
//     prioriry: []
// };
// const filtersReducer = (state = initState,action) =>{
// console.log({state,action});
// switch(action.type) {
//     case 'filters/searchFilterChange':
//         return {             
//                 ...state,
//                 search:action.payload         
//         }
//     case 'filters/statusFilterChange':
//         return{
//             ...state,
//             status:action.payload
//         }
//     case 'filters/priorityFilterChange':
//         return{
//             ...state,
//             prioriry:action.payload
//         }
//     default:
//         return state;
// }
// }

// export default filtersReducer;

//-----------------------------------
//---------- REDUX TOOLKIT ----------

import { createSlice } from '@reduxjs/toolkit'
export default createSlice({
    name:'listCategory',
    initialState:[
        
    ],
    reducers:{
        fetchCategory: (state,action)=>{
           state = action.payload;
           return state;
        }
        
       
    }
})
//-----------------------------------