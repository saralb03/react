import React, { useContext, useEffect } from "react";
// import { AppContext } from '../context/context';
import ResumeItem from "./resumeItem";
import resumeFunctions from "./funcResume";

const ResumeList = () => {
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
  const resumes = resumeFunctions.getAllResumesByUid();
  // const cv = resumes[[PromiseResult]]
  // .map((item, index) => <ResumeItem key={index} item={item} />);
  console.log(resumes);

  return (
    <div className="container">
      <h1>My CV</h1>
      <ul>{cv}</ul>
    </div>

    // <div className='container'>
    //   {/* {resumeAr.map((resume) => { return <ResumeItem item={resume} key={resume.id}/> })} */}

    // </div>
  );
};

export default ResumeList;
