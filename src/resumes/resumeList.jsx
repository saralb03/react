// import React, { useContext, useEffect } from 'react'
// import { AppContext } from '../context/context';
// import ResumeItem from './resumeItem';
// import resumeFunctions from './funcResume';

// const ResumeList = () => {
//     const { resumeAr, setResumeAr } = useContext(AppContext);

//     const fetchData = async () => {
//       try {
//           let resumes = []
//           resumes = await resumeFunctions.getAllResumesByUid();
//           setResumeAr(resumes);
//       } catch (error) {
//           console.error('Error fetching resumes:', error);
//       }
//   };
//     useEffect(() => {
//         fetchData();
//     }, [setResumeAr]);
//     return (
//         <div className='container'>
//           {resumeAr.map((resume) => { return <ResumeItem item={resume} key={resume.id}/> })}
//         </div>
//     );
// };

// export default ResumeList;
/*const ResumeList = () => {
    const {resumeAr, setResumeAr } = useContext(AppContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let resumes = [];
                resumes = await resumeFunctions.getAllResumesByUid();
                console.log(resumes);
                setResumeAr(resumes);
            } catch (error) {
                console.error('Error fetching resumes:', error);
            }
        };

        fetchData();
    }, [setResumeAr]);
    return (
        <div className='container'>
          {resumeAr.map((resume) => { return <ResumeItem item={resume} key={resume.id}/> })}
        </div>
    );
};

export default ResumeList;*/
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/context';
import ResumeItem from './resumeItem';
import resumeFunctions from './funcResume';
import {useCollection} from '../hooks/useCollection'
import {collection} from 'firebase/firestore';
import { db } from '../firebase/config';
import { AppContext } from "../context/context";


const ResumeList = async () => {
    const{doc:resumes}= await useCollection('resumes');
  const { resumeAr, setResumeAr } = useContext(AppContext);
    console.log(resumes);
    console.log("resumes");
    const {uid} = useContext(AppContext);

    return (
        <div className="container my-5">
            <h2 className="mb-4">View CVs</h2>
            <div className="row">
                {resumeAr.map(item => {
                    if ((uid&&item.Uid) ) {
                        return (<div key={item.id} className="col-md-4 mb-4">
                            <ResumeItem cv={item} />
                        </div>)
                    }
                })}
            </div>
            {/* <button onClick={() => nav("/create_cv")} className="btn btn-primary mt-3">Create New CV</button> */}
        </div>
    )

};

export default ResumeList;