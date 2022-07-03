import { React} from "react"
import {useDispatch,useSelector} from 'react-redux';


export default function Size({value,name,checked,setChecked}) {  
    const dispatch = useDispatch();
  return (
        <div  className="d-flex align-items-center gap-3" >
            <input className="form-check-input rad-primary" id={name} type="radio" name={name}
                checked={value===checked.value} value={value} onChange={() => {
                    setChecked({name:name,value:value});
                    
                }}
            />
            <div>
                <label htmlFor={name} className="d-block" >{name}</label>
                <label htmlFor={name} className="d-block price-size-show"
                >{Number(value).toLocaleString()} đ</label>
                <label className="price-size" hidden>s</label>
            </div>
        </div>
                      
            
  );
}
