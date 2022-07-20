import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "../../../hooks/useUser";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react"
import { useState, useEffect } from "react";
import EditAccount from "../Login/EditAccount";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db, authentication } from "../../../Firebase/config";
import usersSlice from "../Login/usersSlice";
import { getUser } from "../../../redux/selector";
export default function InfoUser() {
  const checkUser = authentication.currentUser;
  const user = useSelector(getUser);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useDispatch();
  return checkUser?.uid ? (
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
              readOnly={true}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={user.lastName}
              aria-label="Last name"
              readOnly={true}
            />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <span className="">Địa chỉ</span>
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              className="form-control"
              value={user.address}
              aria-label="First name"
              disabled
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
        <span className="">Sinh nhật ( Không thể đổi )</span>
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
     
      <RadioGroup value={user.sex} isDisabled mt="4">
        <Stack direction="row">
          <Radio value={true}>Nam</Radio>
          <Radio value={false}>Nữ</Radio>
        </Stack>
      </RadioGroup>
      <div className="btn btn-danger mt-3" onClick={() => setShowEdit(!showEdit)}>
        Chinh sua
      </div>
      {showEdit && <EditAccount isShow={showEdit} setShowEdit={setShowEdit} />}
    </div>
  ) : null;
}
