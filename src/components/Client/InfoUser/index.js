import { Form } from "react-bootstrap";

import { useUser } from "../../../hooks/useUser";

export default function InfoUser() {
  const user = useUser("11d8RQnpQ5S4fHSU3LiM7DIJdl43");
  return user ? (
    <div className="col">
      <span className="fs-1 pos-relative">
        Thông tin tài khoản
        <div className="line_bottom" />
      </span>
      <div className="mt-3">
        <span className="">Tên khách hàng</span>
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={user.name}
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={user.lastName}
              aria-label="Last name"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <span className="">Số điện thoại</span>
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={user.phone}
              aria-label="First name"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <span className="">Sinh nhật</span>
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              aria-label="First name"
              value={user.birth}
              disabled
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <span className="">Email</span>
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              aria-label="First name"
              value={user.email}
              disabled
            />
          </div>
        </div>
      </div>
      <Form className="mt-3">
        <Form.Check
          inline
          label="Nam"
          name="group1"
          type="radio"
          id="default-nam"
          defaultChecked={user.sex}
        />

        <Form.Check
          inline
          label="Nữ"
          name="group1"
          type="radio"
          id="default-nu"
          defaultChecked={!user.sex}
        />
      </Form>
      <div className="btn btn-danger">Chinh sua</div>
    </div>
  ) : null;
}
