import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {useState} from 'react'
function ListProduct({posts}){
    const [loaded,setLoaded] = useState(false);
    return (
        <div className="preview-News mt-5">
            <div className="row my-3">
                {posts.map(post => (
                    <div key={post._id} className="col-lg-2 col-md-4 col-sm-12 my-2">
                        <div className="border-product">
                            <Link to={`/product/${post.slug}/`} className="a-none text-dark">
                                <div className="">
                                    <div>
                                        {loaded ? null :  <div
                                            style={{
                                                background: 'red',
                                                height: '120px',
                                                width: '140px',
                                            }}
                                        />}
                                      
                                      <img
                                      className="img-product"
                                        style={loaded ? {} : {display: 'none'}}
                                      src={`https://sever-coffeehouse.herokuapp.com/uploads/${post.imageRepresent}` }
                                      alt=""
                                      onLoad={() => setLoaded(true)}
                                      />
                                    
                                        
                                       
                                             
                                    </div>
                                    <div className="preview-info-product">
                                        <h4 className="name-product fs-6 fw-bolder">
                                            {post.nameProduct}
                                        </h4>
                                        <div className="d-flex justify-content-between align-items-center mt-4">
                                            <div className="fs-6 price">
                                                {post.priceStandard}
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
                ))}
            </div>
           
        </div>
        
    )
}

export default ListProduct