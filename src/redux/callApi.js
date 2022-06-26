import axios from "axios";
const url = 'https://sever-coffeehouse.herokuapp.com';
const addressMyShop = "180 Cao Lỗ, Quận 8 Hồ Chí Minh, Việt Nam"
const nameShop = "Quán cà phê The Coffee House"
const servicesShip = "SGN-EXPRESS" //giao đồ ăn tại sài gòn
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

export const fetchTokenAhamove = async (query)=>{
    const token = await axios.get("https://apistg.ahamove.com/v1/partner/register_account?mobile=84908842280&name=Ahamove+Test+User&api_key=test_key");
    return token;
}

export const getShipFee = async (token,addressUser,nameUser,phoneUser,noteUser)=>{
 
    const pathJson = JSON.stringify([
        {'address': addressMyShop,
        'name':nameShop,
        'remarks':'Call me',
        'mobile':'0327861693'},
        {"address":addressUser,"name":nameUser,"mobile":phoneUser,"remarks":noteUser}
    ]);
    const shipFee =await axios.get('https://apistg.ahamove.com/v1/order/estimated_fee', {
                                        params: {
                                            token: token,
                                            order_time:0,
                                            path:pathJson,
                                            service_id:servicesShip,
                                            requests:[],
                                        }
                                        })
    return shipFee
}

export const createOrder = async (token,addressUser,nameUser,phoneUser,noteUser,items)=>{
 
    const pathJson = JSON.stringify([
        {'address': addressMyShop,
        'name':nameShop,
        'remarks':'Call me',
        'mobile':'0327861693'},
        {"address":addressUser,"name":nameUser,"mobile":phoneUser,"remarks":noteUser}
    ]);
    const itemsJson = JSON.stringify(items)
    const order =await axios.get('https://apistg.ahamove.com/v1/order/create', {
                                        params: {
                                            token: token,
                                            order_time:0,
                                            path:pathJson,
                                            service_id:servicesShip,
                                            requests:[],
                                            items:itemsJson,
                                        }
                                        })
    return order
}