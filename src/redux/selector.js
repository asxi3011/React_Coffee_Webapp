import {createSelector} from '@reduxjs/toolkit';
export const getCategories = (state) => state.categories;
export const getProducts = (state) => state.product
export const getProductInCategory = (state) => state.category.products;
export const getCategoryChecked =  (state) => state.category.checked;
export const getSearchValue = (state) => state.search
export const getListChecked = createSelector(getCategoryChecked,getProductInCategory,(checked,products)=>{
    return products.find(product=>product.name===checked)
})
export const getListRemaining = createSelector(getSearchValue,getProducts,(searchValue,products)=>{
    return products.filter((product)=>product.nameProduct.includes(searchValue))
})

export const getStatusLoading = (state)=>state.modal.loading;
export const getStatusCoupon = (state)=>state.modal.coupon;
export const getNews = (state)=>state.news;
export const getCart = (state) =>state.cart.listItem;
export const getCoupon = (state)=>state.cart.coupon;
export const getName = (state)=>state.cart.nameCustomer;
export const getEmail = (state)=>state.cart.email;
export const getPhone = (state)=>state.cart.phone;
export const getAddress = (state)=>state.cart.address;
export const getNote = (state)=>state.cart.note;
export const getPayments = (state)=>state.cart.payments;

export const getQuantitiesCart = createSelector(
    getCart,
    (carts)=>carts.reduce((pre,item)=>pre+item.quantities,0)
)
export const getPriceTotal = createSelector(
    getCart, 
    (carts)=>{
        return carts.reduce((preCount,item)=>preCount+item.priceTotal,0);
    }
)
export const getPriceCoupon = createSelector(
    getCoupon,
    getPriceTotal,
    (coupon,total)=>{
        switch(coupon){
            case "30phantram":
            return Number(total)*0.3;
            case "19tuoixanh":
            return 19000;
            default:
            return 0;
        }
    }
)
export const getPriceAll = createSelector(
    getPriceTotal,
    getPriceCoupon,
    (total,coupon)=>{
        return total - coupon + 30000;
    }
)