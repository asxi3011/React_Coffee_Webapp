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
} from "@chakra-ui/react";
import React, { useState, useCallback, useEffect } from "react";
import { getIsNewAccount, getUser } from "../../../redux/selector";
import { useSelector, useDispatch } from "react-redux";
import usersSlice from "./usersSlice";
import { useUser } from "../../../hooks/useUser";
import { authentication } from "../../../Firebase/config";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../../../Firebase/config";

export default function NewAccount() {
  const isNewAccout = useSelector(getIsNewAccount)
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
 
  const user = useSelector(getUser);
  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [birth, setBirth] = useState(user?.birth);
  const [sex, setSex] = useState(user?.sex);
  console.log("run NEW ACCOunt",getIsNewAccount);
  const handleSave = useCallback(async () => {
  console.log("run NEW SAVE");
    if (user.phone) {
      try {
        const arr = [];
        const a = doc(db, "users", user.docID);
        const docRef = await updateDoc(a, {
          email: email,
          lastName: lastName,
          name: name,
          sex: sex,
        });
        console.log("RUN");
      } catch (e) {
        console.log(e);
      }
    }
    dispatch(usersSlice.actions.setIsNewAccount(false));
  }, [email, lastName, name,sex, dispatch, user]);
  return (
    user && (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isNewAccout}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Last name</FormLabel>
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Sinh nhật</FormLabel>
                <Input
                  type="date"
                  placeholder="birth Day"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Last name"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <RadioGroup onChange={(e)=>setSex(e==="true"?true:false)} value={sex}>
                <Stack direction="row">
                  <Radio value={true}>Nam</Radio>
                  <Radio value={false}>Nữ</Radio>
                </Stack>
              </RadioGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={() => handleSave()}>
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  );
}
