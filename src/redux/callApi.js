import axios from "axios";
const url = 'https://sever-coffeehouse.herokuapp.com';

export const fetchCategoryRequest = async ()=> {
    const categorys = await axios.get(`${url}/getCategories`)
    return categorys.data.dataCategories;
}
export const fetchProductInCategoryRequest = async (slug)=> {
    const listproduct = await axios.get(`${url}/getProductsInCategory/${slug}`)
    return listproduct.data.dataProducts;
}
export const fetchProductsRequest = async ()=> {
    const listproduct = await axios.get(`${url}/getProducts`)
    return listproduct.data.dataProducts;
}
export const fetchNewsRequest = async ()=> {
    const listNews =  await axios.get(`${url}/news`)
    return listNews.data.dataPosts;
}

export const fetchDetailsProductRequest = async (slug)=> {
   const detail= await axios.get(`${url}/product/${slug}`);
   return detail.data.product;
}

export const fetchListSearch = async (query)=> {
    const list = await axios.get(`${url}/search?q=${query}`)
    return list;
}