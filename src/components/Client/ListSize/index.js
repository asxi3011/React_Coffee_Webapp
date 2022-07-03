import { React,useState} from "react"
import Size from '../Size/index'

export default function ListSize({sizes,checked,setChecked}) {
    
  return (
      
      <div className="mt-4 bd-size">
                <div className="bg-border ">Chọn size (BẮT BUỘC)</div>
                <div className="">
                    <div className="d-flex justify-content-evenly p-2">
                        {sizes.map((size, index) =>{
                            
                            return <Size key={index} name={size.name} checked={checked} setChecked={setChecked} value ={size.value}/>
                        }
                        )}
                    </div>
                </div>
            </div>
  );
}


