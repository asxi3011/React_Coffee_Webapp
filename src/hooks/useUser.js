import { useMemo, useState, useCallback } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db,authentication } from "../Firebase/config";

export const useUser = (id) => {
  //   const [result, setResult] = useState();
  
  const [t, setT] = useState();
  const querySnapshot = useMemo(async () => {
    if (id) {
      const users = collection(db, "users");
      const q = query(users, where("ID", "==", id));
      const test = await getDocs(q);
      test.forEach((doc) => setT({ ...doc.data(), docID: doc.id }));
    }else{
      setT(null);
    }
  }, [id]);
  return t;
  //   return result;
};
