import {
  PinInput,
  PinInputField,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { authentication, db } from "../../../Firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Form, Row, Col, Input, Button, Select, Space } from "antd";
import { useDispatch } from "react-redux";
import { convertTypeNumber } from "../../../utils/convert.js";
import usersSlice from "../Login/usersSlice";
export default function ModalOTP({ isShow, setIsShow }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [OTP, setOTP] = useState("");
  const verifyOTP = async (e) => {
    const MAX_LENG_OTP = 6;
    let otp = e;
    if (otp.length === MAX_LENG_OTP) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then(async (result) => {
          const user = await result.user;
          try {
            const arr = [];
            const querySnapshot = await getDocs(collection(db, "users"));
            const temp = querySnapshot.forEach((doc) =>
              arr.push({ ...doc.data(), idDoc: doc.id })
            );
            const rs = arr?.find((ele) => ele.ID === user.uid);
            if (rs) {
              dispatch(usersSlice.actions.setUser(rs));
              navigate("/profile");
            } else {
              try {
                dispatch(usersSlice.actions.setIsNewAccount(true));
                // const docRef = await addDoc(collection(db, "users"), {
                //   ID: user.uid,
                //   birth: "",
                //   email: "",
                //   lastName: "",
                //   name: "",
                //   phone: user.phoneNumber, // change phone
                //   sex: true,
                //   score: 0,
                // });
                // console.log(docRef.id);
                navigate("/profile");
              } catch {
                alert("Khong them dc db");
              }
            }
          } catch {
            console.log("khong tim thay user");
          }
        })
        .catch((e) => {
          alert("Wrong OTP. Try Again");
        });
    }
    setOTP(e);
  };
  return (
    <Modal isOpen={isShow} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>OTP</ModalHeader>
        <ModalBody>
          <HStack justifyContent="center" w="100%">
            <PinInput otp={true} w="100%" onChange={(e) => verifyOTP(e)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={() => setIsShow(!isShow)}>
            Huy
          </Button>
          <Button variant="ghost">Xac Nhan</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
