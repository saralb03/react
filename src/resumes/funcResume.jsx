import { db } from '../firebase/config';
import { AppContext } from '../context/context';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { useCollection } from '../hooks/useCollection'


const resumeFunctions = {
    
    addNewDoc: async (addObject) => {
        const ref = collection(db, 'resumes');
        await addDoc(ref, {
            FullName: addObject.FullName,
            Experience:addObject.Experience,
            Education: addObject.Education,
            Image: addObject.Image,
            Email:addObject.Email,
            Uid:addObject.Uid
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
            Experience:updateObject.Experience,
            Education: updateObject.Education,
            Image: updateObject.Image,
            Email:updateObject.Email,
            Uid:updateObject.Uid
        });
    },

    // getAllResumesByUid: async () => {
    //     const { uid } = useContext(AppContext);  // Move this inside a component
    //     const resumesRef = collection(db, 'resumes');
    //     const q = query(resumesRef, where("Uid", "==", uid));
    //     const querySnapshot = await getDocs(q);
    
    //     const resumes = [];
    //     querySnapshot.forEach((doc) => {
    //       const data = doc.data();
    //       resumes.push({
    //         id: doc.id,
    //         FullName: data.FullName,
    //         Experience: data.Experience,
    //         Education: data.Education,
    //         Image: data.Image,
    //         Email: data.Email,
    //         Uid: data.Uid,
    //       });
    //     });
    //     return resumes;
    //   },


    };
    
    export default resumeFunctions;
