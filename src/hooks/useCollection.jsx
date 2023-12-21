import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";
import { AppContext } from "../context/context";


export const useCollection = (c) => {
  const [docs, setDocs] = useState([]);
  const { resumeAr, setResumeAr } = useContext(AppContext);
  
  useEffect(() => {
    let ref = collection(db, c)
    // will work every change in the cols
    const unSub = onSnapshot(ref, (snapshot) => {
      let fire_ar = [];
      snapshot.docs.forEach(item => {
        fire_ar.push({ id: item.id, ...item.data() })
        console.log(item.id, item.data());
      })
      setResumeAr(fire_ar)
      setDocs(fire_ar);
      console.log(resumeAr)
    })
    return () => unSub();
  }, [c])


  return { docs };
}
