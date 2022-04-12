import {createSelector} from '@reduxjs/toolkit';
export const getCategories = (state) => state.categories;
export const getProductsInCoffee = (state)=> state.category.coffee;
export const getProductsInTea = (state)=> state.category.tea;
export const getProductsInHome = (state)=> state.category.home;
export const getProductsInCake = (state)=> state.category.cake;
export const getProductsInFreeze = (state)=> state.category.freeze;

export const getProductInCategory = (state)=>state.category;

export const getStatusLoading = (state)=>state.loading.loading;

export const getNews = (state)=>state.news;

export const getDetailProduct = (state)=>state.detailProduct.info;
export const getCurrentPriceProduct = (state)=>state.detailProduct.currentPrice;

export const getQuantities = (state)=>state.detailProduct.quantities;

export const getNote = (state)=>state.detailProduct.note;
export const getSizeSelectedValue = (state)=>state.detailProduct.sizeSelectedValue
export const getSizeSelectedName = (state)=>state.detailProduct.sizeSelectedName

export const getQuantitiesCart = (state)=>state.quantitiesCart
export const getPriceTotal = createSelector(
    getQuantities,
    getCurrentPriceProduct,
    getSizeSelectedValue,
    (quantities,currentPrice,priceSize)=>{
        return quantities*(currentPrice+priceSize)       
    }
)
export const getCart = (state) =>state.cart;