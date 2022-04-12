import { createSlice } from '@reduxjs/toolkit'
export default createSlice({
    name:'category',
    initialState:{
        coffee:{name:'',list:[],checked:false,slug:''},
        tea:{name:'',list:[],checked:false},slug:'',
        cake:{name:'',list:[],checked:false,slug:''},
        home:{name:'',list:[],checked:false,slug:''},
        freeze:{name:'',list:[],checked:false,slug:''},
    },
    reducers:{
        fetchProductInCategory: (state,action)=>{
            switch (action.payload.name) {
                case 'cà phê':
                    state.coffee.list = action.payload.list;
                    state.coffee.name = action.payload.name;
                    state.coffee.slug = action.payload.slug;
                    return state;
                case 'trà':
                    state.tea.list = action.payload.list;
                    state.tea.name = action.payload.name;
                    return state;
                case 'bánh ngọt':
                    state.cake.list = action.payload.list;
                    state.cake.name = action.payload.name;
                    state.cake.slug = action.payload.slug;
                    return state;
                case 'thưởng thức tại nhà':
                    state.home.list = action.payload.list;
                    state.home.name = action.payload.name;
                    state.home.slug = action.payload.slug;
                    return state;
                case 'đá xay':
                    state.freeze.list = action.payload.list;
                    state.freeze.name = action.payload.name;
                    state.freeze.slug = action.payload.slug;
                    return state;
                default:
                    return state;
            }
        },
        changeCategory: (state,action)=>{
            switch (action.payload) {
                case 'cà phê':
                    state.coffee.checked = true;
                    state.tea.checked = false;
                    state.cake.checked = false;
                    state.home.checked = false;
                    state.freeze.checked = false;
                    return state;
                case 'trà':
                    state.tea.checked = true;
                    state.coffee.checked = false;
                    state.cake.checked = false;
                    state.home.checked = false;
                    state.freeze.checked = false;
                    return state;
                case 'bánh ngọt':
                    state.cake.checked = true;
                    state.tea.checked = false;
                    state.coffee.checked = false;
                    state.home.checked = false;
                    state.freeze.checked = false;
                    return state;
                case 'thưởng thức tại nhà':
                    state.home.checked = true;
                    state.tea.checked = false;
                    state.cake.checked = false;
                    state.coffee.checked = false;
                    state.freeze.checked = false;
                    return state;
                case 'đá xay':
                    state.freeze.checked = true;
                    state.tea.checked = false;
                    state.cake.checked = false;
                    state.home.checked = false;
                    state.coffee.checked = false;
                    return state;
                default:
                    return state;
            }
        }
    }
})