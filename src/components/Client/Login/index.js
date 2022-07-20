import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { authentication, db } from "../../../Firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Form, Row, Col, Input, Button, Select, Space } from "antd";
import { useDispatch } from "react-redux";
import { convertTypeNumber } from "../../../utils/convert.js";
import usersSlice from "./usersSlice";
import ModalOTP from "../OTP/index";
import HistoryOrder from "../HistoryOrder/index";
authentication.languageCode = "it";
export default function Login() {
  const { Option } = Select;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [OTP, setOTP] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const phoneCode = "+84";
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleClickSendCode = () => {
    let str = phoneNumber.replace(/\b0+/g, "");
    let phone = phoneCode + str;
    if (phone.length === 12) {
      setShowOTP(true);
      requestOTP();
    } else {
      alert("sai sdt");
    }
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          console.log("rep", response);
        },
      },
      authentication
    );
  };
  const handleChangeNumber = (e) => {
    setPhoneNumber(e.target.value);
    if (e.target.value.length > 8) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} disabled>
        <Option value={phoneCode}>{phoneCode}</Option>
      </Select>
    </Form.Item>
  );

  const requestOTP = () => {
    let str = phoneNumber.replace(/\b0+/g, "");
    let phone = phoneCode + str;
    if (phone.length === 12) {
      generateRecaptcha();
      let appriver = window.recaptchaVerifier;
      signInWithPhoneNumber(authentication, phone, appriver)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          // ...
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("sai sdt");
    }
  };
  // const verifyOTP = async (e) => {
  //   const MAX_LENG_OTP = 6;
  //   let otp = e.target.value;
  //   // if (otp.length === MAX_LENG_OTP) {
  //   //   let confirmationResult = window.confirmationResult;
  //   //   confirmationResult
  //   //     .confirm(otp)
  //   //     .then(async (result) => {
  //   //       const user = await result.user;
  //   //       try {
  //   //         const arr = [];
  //   //         const querySnapshot = await getDocs(collection(db, "users"));
  //   //         const temp = querySnapshot.forEach((doc) =>
  //   //           arr.push({ ...doc.data(), idDoc: doc.id })
  //   //         );
  //   //         const rs = arr?.find((ele) => ele.ID === user.uid);
  //   //         if (rs) {
  //   //           dispatch(usersSlice.actions.setUser(rs));
  //   //           navigate("/profile");
  //   //         } else {
  //   //           try {
  //   //             dispatch(usersSlice.actions.setIsNewAccount(true));
  //   //             const docRef = await addDoc(collection(db, "users"), {
  //   //               ID: user.uid,
  //   //               birth: "",
  //   //               email: "",
  //   //               lastName: "",
  //   //               name: "",
  //   //               phone: user.phoneNumber, // change phone
  //   //               sex: true,
  //   //             });
  //   //             console.log(docRef.id);
  //   //             navigate("/profile");
  //   //           } catch {
  //   //             alert("Khong them dc db");
  //   //           }
  //   //           navigate("/newAccount");
  //   //         }
  //   //       } catch {
  //   //         console.log("khong tim thay user");
  //   //       }
  //   //     })
  //   //     .catch((e) => {
  //   //       alert("Wrong OTP. Try Again");
  //   //     });
  //   // }
  //   setOTP(e.target.value);
  // };
  return (
    <Form
      className="m-auto"
      style={{ maxWidth: "800px" }}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      initialValues={{
        remember: true,
        prefix: phoneCode,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          value={phoneNumber}
          onChange={(e) => {
            handleChangeNumber(e);
          }}
          addonBefore={prefixSelector}
          style={{ width: "100%" }}
        />
      </Form.Item>
      <ModalOTP isShow={showOTP} setIsShow={setShowOTP}></ModalOTP>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Space>
          <Button
            id="sendOtp"
            type="primary"
            onClick={handleClickSendCode}
            disabled={isDisabledButton}
          >
            Send code
          </Button>
        </Space>
      </Form.Item>
      <div id="sign-in-button"></div>
    </Form>
  );
}
