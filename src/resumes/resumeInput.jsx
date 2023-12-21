import React, { useContext, useState, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { AppContext } from "../context/context";
import resumeFunctions from "./funcResume";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import generatePDF from './resumePDF';

const ResumeInput = () => {
  const pdfRef = useRef();
  const { email, uid } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      Education: [{ InstName: "", DStart: "", DEnd: "" }],
      Experience: [{ CompName: "", DStart: "", DEnd: "" }],
      Email: "",
      FullName: "",
      Image: "",
      Uid: uid,
    },
  });

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "Education",
  });
  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "Experience",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const onSub = async (dataBody) => {
    if (imageFile) {
      const imageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      const url = await getDownloadURL(imageRef);
      dataBody.Image = url;
    }
    console.log(dataBody);
    resumeFunctions.addNewDoc(dataBody);
    const htmlContent = `
    <h2>${dataBody.FullName}'s Resume</h2>
    
    <div>
      <h3>Contact Information</h3>
      <p>Email: ${dataBody.Email}</p>
      <img src="${dataBody.Image}" alt="User's Image" style="max-width: 200px; max-height: 200px;" />
    </div>

    <div>
      <h3>Education</h3>
      <ul>
        ${dataBody.Education.map(education => `
          <li>
            <strong>${education.InstName}</strong>
            <p>Start Date: ${education.DStart}</p>
            <p>End Date: ${education.DEnd}</p>
          </li>
        `).join('')}
      </ul>
    </div>

    <div>
      <h3>Experience</h3>
      <ul>
        ${dataBody.Experience.map(experience => `
          <li>
            <strong>${experience.CompName}</strong>
            <p>Start Date: ${experience.DStart}</p>
            <p>End Date: ${experience.DEnd}</p>
          </li>
        `).join('')}
      </ul>
    </div>`

  // Generate the PDF
  const pdfBlob = await generatePDF(htmlContent);
  const pdfStorageRef = ref(storage, 'pdfs/resume.pdf');
  await uploadBytes(pdfStorageRef, pdfBlob);

  console.log('PDF generated and saved:', pdfStorageRef);
  };

  const addEducationField = () => {
    appendEducation({ InstName: "", DStart: "", DEnd: "" });
  };

  const addExperienceField = () => {
    appendExperience({ CompName: "", DStart: "", DEnd: "" });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">My Resume</h2>
      <form onSubmit={handleSubmit(onSub)} className="col-md-6 p-2 w-100">
        <div className="mb-3">
          <label htmlFor="FullName" className="form-label">
            Full Name:
          </label>
          <input
            {...register("FullName")}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email:
          </label>
          <input
            {...register("Email")}
            type="text"
            className="form-control"
            placeholder={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Image" className="form-label">
            Image:
          </label>
          <div className="d-flex align-items-center">
            <input
              type="file"
              onChange={handleImageChange}
              className="form-control"
            />
            {imageFile && (
              <div className="uploaded-image-container ms-2">
                <img
                  src={URL.createObjectURL(imageFile)}
                  alt="Preview"
                  className="img-thumbnail rounded-circle shadow-sm"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Education Fields */}
        {educationFields.map((item, index) => (
          <div key={item.id}>
            <div className="mb-3">
              <label
                htmlFor={`Education[${index}].InstName`}
                className="form-label"
              >
                Institution Name:
              </label>
              <input
                {...register(`Education[${index}].InstName`)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor={`Education[${index}].DStart`}
                className="form-label"
              >
                Start Date:
              </label>
              <input
                {...register(`Education[${index}].DStart`)}
                type="date"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor={`Education[${index}].DEnd`}
                className="form-label"
              >
                End Date:
              </label>
              <input
                {...register(`Education[${index}].DEnd`)}
                type="date"
                className="form-control"
              />
            </div>
            <button type="button" onClick={() => removeEducation(index)}>
              Remove Education
            </button>
          </div>
        ))}
        <button type="button" className="m-1" onClick={addEducationField}>
          Add Education
        </button>

        {/* Experience Fields */}
        {experienceFields.map((item, index) => (
          <div key={item.id}>
            <div className="mb-3">
              <label
                htmlFor={`Experience[${index}].CompName`}
                className="form-label"
              >
                Company Name:
              </label>
              <input
                {...register(`Experience[${index}].CompName`)}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor={`Experience[${index}].DStart`}
                className="form-label"
              >
                Start Date:
              </label>
              <input
                {...register(`Experience[${index}].DStart`)}
                type="date"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor={`Experience[${index}].DEnd`}
                className="form-label"
              >
                End Date:
              </label>
              <input
                {...register(`Experience[${index}].DEnd`)}
                type="date"
                className="form-control"
              />
            </div>
            <button type="button" onClick={() => removeExperience(index)}>
              Remove Experience
            </button>
          </div>
        ))}
        <button type="button" className="m-1" onClick={addExperienceField}>
          Add Experience
        </button>
<br />
<button type="submit" className="btn btn-success mt-3 mx-1">
        Add Resume
      </button>
      <iframe
        title="pdfViewer"
        ref={pdfRef}
        style={{ display: 'none' }}
        sandbox="allow-scripts"
      />
      </form>
    </div>
  );
};

export default ResumeInput;
