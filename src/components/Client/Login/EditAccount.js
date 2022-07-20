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

export default function EditAccount({ isShow, setShowEdit }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  
  const user = useSelector(getUser);
  const [name, setName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [sex, setSex] = useState(user?.sex);
  const [address, setAddress] = useState(user?.address);
  
  useEffect(() => {
    if (user) {
      setName(user?.name);
      setLastName(user?.lastName);
      setEmail(user?.email);
      setAddress(user?.address);
    }
  }, [user]);
  const handleSave = useCallback(async () => {
    console.log("run");
    if (user.phone) {
      try {
        const a = doc(db, "users", user.docID);
        const docRef = await updateDoc(a, {
          email: email,
          lastName: lastName,
          address:address,
          name: name,
          sex: sex,
        });
        
      } catch (e) {
        console.log(e);
      }
    }
    setShowEdit(false);
  }, [email, lastName,address, name, user,sex,setShowEdit]);
  console.log(name);
  return (
    user && (
      <>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isShow}
          onClose={() => setShowEdit(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton onClick={() => setShowEdit(false)} />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Tên</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="First name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Họ</FormLabel>
                <Input
              
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </FormControl>
          
              <FormControl mt={4}>
                <FormLabel>Địa chỉ</FormLabel>
                <Input
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
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
