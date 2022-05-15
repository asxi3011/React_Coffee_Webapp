import React from 'react'
export default function SuccessReply({order}){
    function convertDate(createdAt){
        var date = new Date(createdAt)
        return date.toLocaleString('en-GB', {day:'numeric', month: 'long', year:'numeric'}) + " "+ date.toLocaleTimeString('en-GB');
    }
    return(
        <div className="row mt-3">
        <div className="d-flex justify-content-center my-5">
            <div className="col-6 p-4 rounded box-details-order">

                <h3 className="text-center fw-bold">Chi tiết đơn hàng</h3>
                <div>

                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="my-2">
                                <span className="fw-bold">Mã đơn hàng: </span>{order.data.idOrder}
                            </div>
                            <div className="my-2">
                                {order.data.status}
                            </div>
                            <div className="my-2">
                            Ngày: {
                              convertDate(order.data.createdAt)
                            }
                            </div>
                        </div>
                        <div>
                            <div className="my-2">
                                Khách Hàng: {order.data.hotenOrder}
                            </div>
                            <div className="my-2">
                                SĐT:  {order.data.sdtOrder}
                            </div>
                            <div className="my-2">
                                Địa chỉ:  {order.data.addressOrder}
                            </div>
                        </div>
                    </div>
                    <div id='appendListCategory'>
                        <h5>Giỏ hàng</h5>
                        <div className="line_bottom"></div>
                        <table className="table table-striped my-3 align-middle text-center table-text-form">
                            <thead>
                            <tr>
                                <th className="">STT</th>
                                <th className="">tên sản phẩm</th>
                                <th className="">số lượng</th>
                                <th className="">Size</th>
                                <th className="">Giá sản phẩm</th>
                                <th className="">Ghi chú</th>
                                <th>Tổng giá</th>
                                </tr>
                            </thead>
                            {order.cartProduct.map((od,index)=>
                                  <tbody key={index}>
                                  <tr>
                                  <td className="">{index+1}</td>
                                  <td className="">{od.nameProduct}</td>
                                  <td className="">{od.quantities}</td>
                                  <td>{od.sizeNameSelected}(+{od.sizeValueSelected})</td>
                                  <td>{od.priceStandard.toLocaleString()}</td>
                                 
                                  <td>{od.note}</td>
                                  <td>{od.priceAll}</td>
                                  </tr>
  
                              </tbody> 
  
                            )}
                          
                        </table>

                        <div className="d-flex justify-content-between my-2">
                            <div>
                                Khuyễn mãi:
                            </div>
                            <div>
                            {order.data.priceCoupon.toLocaleString()}
                            </div>

                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <div>
                                Phí ship:
                            </div>
                            <div>
                                {order.data.priceCharge.toLocaleString()}
                            </div>

                        </div>
                        <div className="d-flex justify-content-between my-2">
                            <div className="color-primary fs-5 fw-bold">
                                Thành Tiền:
                                <div className="line_bottom"></div>
                            </div>
                            <div className="color-primary fs-5 fw-bold">
                                {order.data.priceTotal.toLocaleString()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}