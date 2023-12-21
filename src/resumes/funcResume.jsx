import React, { useContext } from "react";
import { db } from "../firebase/config";
import { AppContext } from "../context/context";
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useCollection } from "../hooks/useCollection";
import ResumeItem from "./resumeItem";

const resumeFunctions = {
  addNewDoc: async (addObject) => {
    const ref = collection(db, "resumes");
    await addDoc(ref, {
      FullName: addObject.FullName,
      Experience: addObject.Experience,
      Education: addObject.Education,
      Image: addObject.Image,
      Email: addObject.Email,
      Uid: addObject.Uid,
    });
  },

  onDelClick: async (id) => {
    const ref = doc(db, "resumes", id);
    await deleteDoc(ref);
  },

  onEditDoc: async (id, updateObject) => {
    const ref = doc(db, "resumes", id);
    await updateDoc(ref, {
      FullName: updateObject.FullName,
      Experience: updateObject.Experience,
      Education: updateObject.Education,
      Image: updateObject.Image,
      Email: updateObject.Email,
      Uid: updateObject.Uid,
    });
  },

  getAllResumesByUid: async () => {
    const { uid } = useContext(AppContext); // Move this inside a component
    console.log(uid);
    if (!uid) {
      // Handle the case where uid is undefined
      console.error("uid is undefined");
      return [];
    }
    const resumesRef = collection(db, "resumes");
    const q = query(resumesRef, where("Uid", "==", uid));
    const querySnapshot = await getDocs(q);

    const resumes = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("data");
      console.log(data);
      resumes.push({
        id: doc.id,
        FullName: data.FullName,
        Experience: data.Experience,
        Education: data.Education,
        Image: data.Image,
        Email: data.Email,
        Uid: data.Uid,
      });
    });
    console.log("resumeaaaaaa");
    console.log(resumes[1].Uid);
    console.log(resumes[1].Education);
    console.log(resumes[1].Email);
    console.log(resumes[1].Education);
    console.log(resumes[1].FullName);
    return (
        // `<div className="container mt-3">
        //   {resumes.map((item) => (
        //     <div className="card" key={item.id}>
        //       <img src={item.Image} className="card-img-top" alt="User" />
        //       <div className="card-body">
        //         <h5 className="card-title">Resume Details</h5>
        //         <ul className="list-group list-group-flush">
        //           <li className="list-group-item">
        //             <strong>FullName:</strong> ${item.FullName}
        //           </li>
        //           <li className="list-group-item">
        //             <strong>Education:</strong> ${item.Education}
        //           </li>
        //           <li className="list-group-item">
        //             <strong>Experience:</strong> ${item.Experience}
        //           </li>
        //           <li className="list-group-item">
        //             <strong>Email:</strong> $   ${item.Email}
        //           </li>
        //         </ul>
        //       </div>
        //     </div>
        //   ))}
        // </div>`
        <div className="container">
        {resumes.map((item, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-body">
              <h5 className="card-title">{item.FullName}</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Education:</strong> {item.Education}
                </li>
                <li className="list-group-item">
                  <strong>Experience:</strong> {item.Experience}
                </li>
                <li className="list-group-item">
                  <strong>Email:</strong> {item.Email}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      );
  }
  
};

export default resumeFunctions;
