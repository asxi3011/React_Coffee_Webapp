import { useMemo, useState, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/config";
export const useUser = (id) => {
  //   const [result, setResult] = useState();

  const [t, setT] = useState();
  const querySnapshot = useMemo(async () => {
    const users = collection(db, "users");
    const q = query(users, where("ID", "==", id));
    const test = await getDocs(q);
    let a = {};
    test.forEach((doc) => setT(doc.data()));
  }, [id]);
  return t;
  //   return result;
};
