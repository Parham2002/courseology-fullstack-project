import React from 'react'
import "./CourseContainer.scss";
import Course from "../../Components/Course/Course"
import CoursesData from "../../Assets/TempData/CoursesData"

const CourseContainer = () => {
  return (
    <div className='course-container'>
    {CoursesData.map(course => {
        return (<Course name={course.name} />)
    })}
    </div>
  )
}

export default CourseContainer