import React from "react";
export default function SuccessReply({ order, size }) {
  function convertDate(createdAt) {
    var date = new Date(createdAt);
    return (
      date.toLocaleString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }) +
      " " +
      date.toLocaleTimeString("en-GB")
    );
  }
  console.log("HERE", order);
  return (
    order && (
      <div className="row">
        <div className="d-flex justify-content-center">
          <div
            className={
              size === "full"
                ? "col-12 p-4 rounded box-details-order"
                : "col-6 p-4 rounded box-details-order"
            }
          >
            <h3 className="text-center fw-bold">Chi tiết đơn hàng</h3>
            <div>
              <div className="d-flex justify-content-between">
                <div>
                  <div className="my-2">
                    <span className="fw-bold">Mã đơn hàng: </span>
                    {order.idOrder}
                  </div>
                  <div className="my-2">
                    {order.statusOrder === "done" || order.paid === true
                      ? "Paid"
                      : "cancel"}
                  </div>
                  <div className="my-2">
                    Ngày: {convertDate(order.createdAt)}
                  </div>
                </div>
                <div>
                  <div className="my-2">Khách Hàng: {order.hotenOrder}</div>
                  <div className="my-2">SĐT: {order.sdtOrder}</div>
                  <div className="my-2">Địa chỉ: {order.addressOrder}</div>
                </div>
              </div>
              <div id="appendListCategory">
                <h5>Giỏ hàng</h5>
                <div className={size === "full" ? "" : "line_bottom"}></div>
                <table className="table table-striped my-3 align-middle text-center table-text-form">
                  <thead>
                    <tr>
                      <th className="">STT</th>
                      <th className="">tên sản phẩm</th>
                      <th className="">số lượng</th>
                      <th className="">Size</th>
                      <th className="">Giá sản phẩm</th>
                      <th className="">Ghi chú</th>
                    </tr>
                  </thead>
                  {order.listProductCart.map((od, index) => (
                    <tbody key={index}>
                      <tr>
                        <td className="">{index + 1}</td>
                        <td className="">{od.nameProduct}</td>
                        <td className="">{od.quantities}</td>
                        <td>
                          {od.sizeNameSelected}(+{od.sizeValueSelected})
                        </td>
                        <td>{od.priceStandard.toLocaleString()}</td>

                        <td>{od.note}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
                <div className="d-flex justify-content-between my-2">
                  <div>Tổng giá sản phẩm:</div>
                  <div>{order.priceTotal.toLocaleString()}</div>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <div>Khuyễn mãi:</div>
                  <div>{order.priceCoupon.toLocaleString()}</div>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <div>Phí ship:</div>
                  <div>{order.priceCharge.toLocaleString()}</div>
                </div>
                <div className="d-flex justify-content-between my-2">
                  <div className="color-primary fs-5 fw-bold">
                    Thành Tiền:
                    <div className={size === "full" ? "" : "line_bottom"}></div>
                  </div>
                  <div className="color-primary fs-5 fw-bold">
                    {order.priceAll.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
