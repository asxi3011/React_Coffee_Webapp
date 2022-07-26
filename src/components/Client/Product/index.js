import React, {useState,memo} from 'react'
import { Link } from "react-router-dom";
import Skeleton  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function CardProduct({product}) {
    const [loaded,setLoaded] = useState(false);
    return (
        <> 
                <div key={product._id} className="col-lg-2 col-md-4 col-sm-12 my-2">
                <div className="border-product">
                    <Link to={`/product/${product.slug}/`} className="a-none text-dark">
                        <div className="">
                            <div>
                            {loaded ? null : <Skeleton height={219} with={219}></Skeleton>  }
                                <img
                                    style={loaded ? {} : {display: 'none'}}
                                    className="img-product"
                                    src={`https://sever-coffeehouse.herokuapp.com/uploads/${product.imageRepresent}`}
                                    alt=""
                                    onLoad={()=>setLoaded(true)}
                                />
                            </div>
                            <div className="preview-info-product">
                                <h4 className="name-product fs-6 fw-bolder">
                                    {product.nameProduct}
                                </h4>
                                <div className="d-flex justify-content-between align-items-center mt-4">
                                    <div className="fs-6 price">
                                        {product.priceStandard.toLocaleString("en-US", {style:"currency", currency:"VND"})}
                                    </div>
                                    <div className="fs-3">
                                        <i className="fas fa-plus-circle color-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div> 
             
        </>
    )
}

export default memo (CardProduct);