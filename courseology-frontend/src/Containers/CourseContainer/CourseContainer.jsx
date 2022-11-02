import React, { useEffect, useState } from 'react'
import "./CourseContainer.scss";
import Course from "../../Components/Course/Course"

const CourseContainer = ({ searchTerm }) => {
  const [courses, setCourses] = useState([])

  const getCourses = async () => {
    const response = await fetch("http://localhost:8080/courses");
    const courseData = await response.json();
    setCourses(courseData);
  };

  useEffect(() => {
    getCourses();
  })

  return (
    <div className='course-container'>
    {courses.filter((value) => {
      if (value === "") {
        return value;
      } else if (value.courseName.toLowerCase().includes(searchTerm.toLowerCase())) {
        return value;
      }
      return 0;
    }).map((course, key) => {
        return (<Course key={key} name={course.courseName} />)
    })}
    </div>
  )
}


export default CourseContainer