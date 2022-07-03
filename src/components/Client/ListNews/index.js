import React from "react"
import { Link } from "react-router-dom";
import News from '../News/index'

function ListNews({news,length}) {

    const limitNews = ()=>{
        return news.filter((ele,index)=>index<length)
    }
    const checkContinues = ()=> news.length > length ? true : false;
    return (
        <>
        
                    <div className="preview-News mt-5">
                        <div className="row my-3">
                            {limitNews.length>0 
                            ? limitNews.map((neww,index)=><News key={index} data={neww}/>)
                            : news.map((neww,index)=><News key={index} data={neww}/>)}
                        </div>
                    </div>
                    {checkContinues() ? 
                    <div className="text-center">
                    <Link to="/news" className="a-none color-primary fs-6">
                        Xem tất cả <i className="fas fa-arrow-right" />
                    </Link>
                    </div>
                    : ''
                    }
                    
          
        </>
    )
}

export default ListNews