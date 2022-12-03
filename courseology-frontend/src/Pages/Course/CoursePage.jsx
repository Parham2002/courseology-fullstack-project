import "./CoursePage.scss"
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import NoImage from "../../Assets/Images/no_image.png"

const CoursePage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState([]);
  const [deletePopUp, showDeletePopUp] = useState(false)
  const navigate = useNavigate;
  

  const getCourseById = async () => {
    const url = `http://localhost:8080/course/${id}`;
    const response = await fetch(url);
    const courseData = await response.json();
    setCourse(courseData);
  };

  const togglePopUp = () => {
    showDeletePopUp(!deletePopUp)
  }

  const handleDelete = async id => {

    const result = await fetch(`http://localhost:8080/course/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("course deleted");
      navigate("/courses");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  useEffect(() => {
    getCourseById(id);
  });

  return (
    <>
    <div className='course'>
      <div className="course__name">{course.courseName}</div>
      <div className="course__image"><img src={course.imageURL ? course.imageURL : NoImage} alt="" /></div>
      <div className="course__info">Author: {course.author} <br/> Category: {course.category} <br/> Completion Time: {course.completionTime} <br/> Price: {course.price} <br/> Date Created: {course.dateCreated}</div>
      <div className="course__description">Description: <br/> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eum aliquam libero voluptate natus impedit incidunt! Deserunt doloremque deleniti eligendi alias, corporis quasi recusandae molestiae illo eveniet. Amet, voluptate natus.</div>
      <div className="course__buttons">
        <Button name={"Delete"} onclick={togglePopUp} />
        <Button name={"Edit"} link={`./edit`}/>
      </div>
      {deletePopUp && <div className="course__delete">
      Are you sure you wish to delete this course?
      <Button name={"No"} onclick={togglePopUp}/>
      <Button name={"Yes"} onclick={handleDelete} />
    </div> }
    </div>

    </>
  )
}

export default CoursePage;