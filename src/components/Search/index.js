
import React,{useState,useRef} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import {getSearchValue,getListRemaining} from '../../redux/selector'
import searchSlice from './searchSlice';
import $ from 'jquery';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();
mic.lang = 'vi-VI';
mic.continuous = false;
export default function Search(){
    const dispatch = useDispatch()
    let navigate = useNavigate();
    const [isListening,setIsListening] = useState(true);
    const searchValue =useSelector(getSearchValue);
    const ListRemaining =useSelector(getListRemaining);
    const [isShowSearch,setIsShowSearch] = useState(false);
    const micro = useRef(mic);
    const handleSearch = (e)=>{ 
        dispatch(searchSlice.actions.changeSearch(e.target.value));
    }
    const toggleShowSearch = (e)=>{
        e.stopPropagation();
       
        setIsShowSearch(!isShowSearch);
    }
    const handleListeng = ()=>{
        if(isListening){
            micro.current.start();
            setIsListening(!isListening);
            $("#micro").addClass('mic-recording')
            $("#logo-mic").addClass('fa-stop').removeClass('fa-microphone');
            micro.current.onend = ()=>{
                micro.current.stop();  
                $("#micro").removeClass('mic-recording')
                $("#logo-mic").addClass('fa-microphone').removeClass('fa-stop');
            }
        }else{
            micro.current.stop();
            setIsListening(!isListening);
            micro.current.onend = ()=>{
                $("#micro").removeClass('mic-recording')
                $("#logo-mic").addClass('fa-microphone').removeClass('fa-stop');

                console.log('Stopped Mic');
            }
        }
        micro.current.onstart = ()=>{
            console.log('Mic on');
        }
        micro.current.onresult = (event)=>{
            const normalText = event.results[0][0].transcript.toLowerCase();
            dispatch(searchSlice.actions.changeSearch(normalText));
            $('#form1').focus();
        }
    }
    const handleKeyDownSearch = (e)=>{
        if(e.key === 'Enter'){
            navigate(`/search?q=${searchValue}`);   
            $('#form1').blur();
        }    
    }
    
    return(
        <div className=" ">

        <div className="form-outline pos-rela">
            <input type="text" value={searchValue} onKeyDown={handleKeyDownSearch}  onChange={handleSearch} onFocus={toggleShowSearch} onBlur={toggleShowSearch} id="form1" className="form-control px-5" placeholder="Tìm sản phẩm.." aria-label="Search" />
            <i className="fas fa-search search-inline color-primary"></i>
            <div className="square-30 rounded-circle background-primary micro-inline d-flex" id="micro"  onClick={handleListeng}>
                <i id="logo-mic" className="fa-solid fa-microphone m-auto"></i>
            </div>
            {searchValue && isShowSearch ?
                <div className="result-hint text-dark " >
                {ListRemaining.map((item,index)=>{
                    if(index<5){
                    return(
                        <div key={index} onMouseDown={()=>navigate(`/product/${item.slug}`)} className='a-none item-search d-flex pe-cursor align-items-center w-100' title={item.nameProduct}>
                        <img className="square-80 p-1 rounded w-25" src={`https://sever-coffeehouse.herokuapp.com/uploads/${item.imageRepresent}`}></img>
                        <div className="w-75">
                            <div className="mw-75 text-one-line fw-bold text-dark px-3">{item.nameProduct}</div>
                            <div className='text-dark px-3'>{item.priceStandard.toLocaleString()}</div>
                        </div>
                        </div>
                    )
                    }
                })}

                <div onMouseDown={()=>navigate(`/search?q=${searchValue}`)} className="a-none item-search pe-cursor">
                    <div className="p-3">
                        <i className="fa-solid fa-magnifying-glass"></i> Tìm kiếm <span className="fw-bold color-primary">
                        {searchValue}</span>
                    </div>
                </div>
                      
               
                
            </div>
            :''
        }
            
        </div>
        

        </div>
    )
}