import { useEffect } from "react";
import {useUser} from "../hooks/useUser"

import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db,authentication } from "../Firebase/config";
import { useDispatch, useSelector } from "react-redux";
import usersSlice from "../components/Client/Login/usersSlice";
import cartSlice from "../components/Client/Cart/cartSlice";

export const useGetUser = ()=>{
    const dispatch = useDispatch();
    const prevUser = authentication.currentUser;

    const user = useUser(prevUser?.uid);
    useEffect(()=>{
        if (user) {
            const unsub = onSnapshot(
              doc(db, "users", user.docID),
              { includeMetadataChanges: true },
              (doc) => {
                dispatch(
                  usersSlice.actions.setUser({ ...doc.data(), docID: doc.id })
                );
                dispatch(cartSlice.actions.setEmail(doc.data().email));
                dispatch(cartSlice.actions.setNameCustomer(doc.data().lastName+" "+doc.data().name));
                dispatch(cartSlice.actions.setPhone(doc.data().phone));
                dispatch(cartSlice.actions.setAddress(doc.data().address));
              }
            );
        }
    },[user,dispatch])
    return user;
}