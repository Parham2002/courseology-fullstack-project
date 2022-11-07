import "./AddCourse.scss";

import React from 'react'
import Form from "../../Components/Form/Form";

const AddCourse = () => {
  const handleSubmit = async course => {
    const result = await fetch("http://localhost:8080/course", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    if (result.ok) {
      alert("Course added");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = { author: "", courseName: "", category: "", description: "", imageURL: "", price: null, completionTime: "" };
  return (
    <div className="add-course-container">
      <Form handleSubmit={handleSubmit} defaultFormState={defaultFormState} formTitle="Add A New Course"/>
    </div>
  )
}

export default AddCourse;