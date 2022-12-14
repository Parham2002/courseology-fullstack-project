import "./EditCourse.scss";
import Form from "../../Components/Form/Form";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


const EditCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);

  const getCourseById = async id => {
    const url = `http://localhost:8080/course/${id}`;
    const response = await fetch(url);
    const courseData = await response.json();
    setCourse(courseData);
  };



  const handleUpdate = async updatedCourse => {
    const result = await fetch(`http://localhost:8080/course/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCourse),
    });

    if (result.ok) {
      alert("Course updated");
      setCourse(updatedCourse);
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  useEffect(() => {
    getCourseById(id);
  }, [id]);

  const defaultFormState = { author: course.author, courseName: course.courseName, category: course.category, description: course.description, imageURL: course.imageURL, price: course.price, completionTime: course.completionTime };
  return (
    <div className="edit-course-container">
      <Form handleSubmit={handleUpdate} defaultFormState={defaultFormState} formTitle="Edit course"/>
    </div>
  )
}

export default EditCourse;