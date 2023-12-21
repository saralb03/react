// import React from 'react';

// const ResumeItem = (props) => {

//     const { education, experience, email, fullName, image } = props;

//     return (
//         <div className="container mt-3">
//             <div className="card">
//                 <img src={image} className="card-img-top" alt="User" />
//                 <div className="card-body">
//                     <h5 className="card-title">Resume Details</h5>
//                     <ul className="list-group list-group-flush">
//                         <li className="list-group-item">
//                             <strong>FullName:</strong> {fullName}
//                         </li>
//                         <li className="list-group-item">
//                             <strong>Education:</strong>
//                             <ul>
//                                 {education.map((item, index) => (
//                                     <li key={index}>{item}</li>
//                                 ))}
//                             </ul>
//                         </li>
//                         <li className="list-group-item">
//                             <strong>Experience:</strong>
//                             <ul>
//                                 {experience.map((item, index) => (
//                                     <li key={index}>{item}</li>
//                                 ))}
//                             </ul>
//                         </li>
//                         <li className="list-group-item">
//                             <strong>Email:</strong> {email}
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ResumeItem;

import React from "react";

const ResumeItem = (props) => {
  console.log("props");
  console.log(props);
  const { education, experience, email, fullName, image } = props;

  return (
    <div className="container mt-3">
      <div className="card">
        <img src={image} className="card-img-top" alt="User" />
        <div className="card-body">
          <h5 className="card-title">Resume Details</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>FullName:</strong> {fullName}
            </li>
            <li className="list-group-item">
              <strong>Education:</strong>
              <ul>
                {education.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li className="list-group-item">
              <strong>Experience:</strong>
              <ul>
                {experience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeItem;
