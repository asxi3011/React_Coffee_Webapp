import React from 'react'
import { Link } from "react-router-dom";



function CardProduct({product}) {
    return (
        <> 
                <div key={product._id} className="col-lg-2 col-md-4 col-sm-12 my-2">
                    <div className="border-product">
                        <Link to={`/product/${product.slug}/`} className="a-none text-dark">
                            <div className="">
                                <div>
                                    <img
                                        className="img-product"
                                        src={`https://sever-coffeehouse.herokuapp.com/uploads/${product.imageRepresent}`}
                                        alt=""
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

export default CardProduct