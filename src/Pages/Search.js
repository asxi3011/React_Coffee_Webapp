import React, { useState,useEffect } from 'react';
import Reply from '../components/Client/CheckOrder/Reply';
import {useSearchParams,useNavigate} from 'react-router-dom';
import {fetchListSearch} from '../redux/callApi';
import NotFound from '../components/Client/Partials/NotFound';
function Search(){
    const[search,setSearch]=useState("")
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const searchValue = decodeURI(searchParams.get('q')).replaceAll('+',' ').trim();
    const [listSearch,setListSearch] = useState();
    useEffect(()=>{
        setSearch(searchValue);
        const list = fetchListSearch(searchValue);
        list.then(list=>{
            console.log(list);
            setListSearch(list.data);
            console.log(list.data);
        })
    },[searchParams])
    const listItemBaiViet = (news,index)=>{
        return(
        <div key={index} onMouseDown={()=>navigate(`/news/${news.slug}`)} className='a-none item-search d-flex pe-cursor align-items-center gap-3' title="Tooltip on top">
        <img className="square-120 rad-24 p-1 " src={`https://sever-coffeehouse.herokuapp.com/uploads/${news.image}`}></img>
        <div className="d-flex flex-column flex-grow-1">
            <div className="text-one-line w-75 fw-bold text-dark">{news.title}</div>
        </div>
        </div>
        )
    }
    const listItemSanPham = (product,index)=>{
        return(
        <div key={index} onMouseDown={()=>navigate(`/product/${product.slug}`)} className='a-none item-search d-flex pe-cursor align-items-center gap-3' title="Tooltip on top">
        <img className="square-120 p-1 rad-24" src={`https://sever-coffeehouse.herokuapp.com/uploads/${product.imageRepresent}`}></img>
        <div className="d-flex flex-column flex-grow-1">
            <div className="text-one-line w-75 fw-bold text-dark">{product.nameProduct}</div>
            <div className=" text-dark">{product.priceStandard.toLocaleString()}</div>
        </div>
        </div>
        )
    }
    const handleKeyDownSearch = (e)=>{
        if(e.key === 'Enter'){
            navigate(`/search?q=${search}`);   
        }    
    }
    const handleClickSearch = (e)=>{
        navigate(`/search?q=${search}`);   
    }
    return(
        <div className="container-fluid pd-header pd-w-100">
            <div className="d-flex justify-content-center mt-5">
                <div className="col-6 d-flex">
                    <input type="text" name="q" onKeyDown={handleKeyDownSearch}  id="Input" onChange={(e)=>{setSearch(e.target.value)}} value={search}
                        className="form-control d-inline border-radius-none" placeholder="Tìm kiếm thứ gì đó"/>
                    {/* <FindOut  dataFromParent ={trans} /> */}
                    <button type="Button" onClick={handleClickSearch} className="btn bg-gradient-primary w-50 border-radius-none text-white">Tìm Kiếm</button>
                </div>
            </div>
            {listSearch ?
            <div>            
                {listSearch.hadFound ?
                <div>
            
                {listSearch.news.length > 0 ?  <> <div className="fw-bold fs-3">Bài Viết</div>{listSearch.news.map((item,index)=>listItemBaiViet(item,index))}</> : ''}
            
                { listSearch.products.length > 0 ? <> <div className="fw-bold fs-3">Sản Phẩm</div>{listSearch.products.map((item,index)=>listItemSanPham(item,index))}</>  : ''}

                </div>
                :
                <NotFound/>
                }
            </div>
            :''
            }
         </div>            
        )    
}

    
export default Search