import { useParams } from "react-router-dom";
import { React, useState, useEffect } from "react";
import {
  getNews,
  getStatusLoading,
  getProductInCategory,
  getCategoryChecked,
} from "../redux/selector";

import { useSelector, useDispatch } from "react-redux";
import ListProduct from "../components/Client/ListProduct";

import ListCategory from "../components/Client/ListCategory";

import NotFound from "../components/Client/Partials/NotFound";

export default function PageProduct({ nameSelected }) {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const products = useSelector(getProductInCategory);
  const checkedName = useSelector(getCategoryChecked);
  const [listProduct, setListProduct] = useState();
  useEffect(() => {
    const list = products.find((ele) => {
      return ele.slug === slug;
    });
    console.log(list);
    setListProduct(list);
  }, [slug]);
  return listProduct ? (
    <>
      <div className="pd-header">
        <div className="container-fluid">
          <div className="pd-w-100 section-Chapter">
            <div className="preview-Menu">
              <div className="text-center fs-3 mb-3 mt-3">
                <span>
                  <i className="fas fa-trophy color-primary fs-4" />
                </span>
                Sản phẩm từ Nhà
              </div>

              <ListCategory checkedName={checkedName} showParams={true} />
            </div>
            {<ListProduct products={listProduct} />}
          </div>
        </div>
      </div>
    </>
  ) : (
    <NotFound />
  );
}
