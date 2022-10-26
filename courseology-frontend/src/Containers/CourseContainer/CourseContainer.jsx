import React, { useEffect, useState } from 'react'
import "./CourseContainer.scss";
import Course from "../../Components/Course/Course"

const CourseContainer = () => {
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
    {courses.map(course => {
        return (<Course name={course.courseName} />)
    })}
    </div>
  )
}

export default CourseContainer