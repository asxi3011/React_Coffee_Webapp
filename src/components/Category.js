
import { Link } from "react-router-dom";
import { React, memo } from "react"


function Category({ category, style, styleColor }) {
    return (
        <Link to={`/${category.slug}`} key={category._id} className="item-category a-none">
            <div className="" >
                <div className="image-cateogry rounded-circle m-auto" style={style}>
                    <img
                        className="h-100"
                        src={`https://sever-coffeehouse.herokuapp.com/uploads/${category.imageCategory}`}
                        alt="category"
                    />
                </div>
                <div className="fs-6 text-center text-disable text-coffe my-2" style={styleColor}>
                    {category.nameCategory}
                </div>
            </div>
        </Link>
    )
}

export default memo(Category)