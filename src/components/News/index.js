import React, {useState} from 'react'

import { Link } from "react-router-dom";
 
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function News({data}) {
    const [loaded,setLoaded] = useState(false);
    return (
        <>
                   
            <div key={data._id} className="col-lg-3 col-md-6 col-sm-12 my-2" >
                <Link to={`/news/${data.slug}`}>
                    <div>
                        {loaded ? null :  <Skeleton height={188} with={377}/>}
                    </div>
                    <img
                        style={loaded ? {} : {display:'none'}}
                        className="img-News"
                        src={`https://sever-coffeehouse.herokuapp.com/uploads/${data.image}`}
                        alt="post"
                        onLoad={()=>setLoaded(true)}
                    />
                </Link>
                <div className="border-news">
                    <div className="my-4">
                        <h6 className="text-uppercase cut-text fw-bold">
                            {data.title}
                        </h6>
                    </div>
                    <div className="d-flex flex-row-reverse mt-3">
                        <Link to={`/news/${data.slug}`}
                            className="btn bg-gradient-primary rounded-pill text-white fs-min-plus fw-bold my-2"
                        >
                            Đọc tiếp
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News