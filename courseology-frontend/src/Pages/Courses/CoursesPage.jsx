import "./CoursesPage.scss"
import React from 'react'
import CourseContainer from "../../Containers/CourseContainer/CourseContainer"
import SearchBar from "../../Components/SearchBar/SearchBar"
import Button from "../../Components/Button/Button"

const Courses = () => {
  return (
    <div>
      <Button name={"Add Course"} link={"/addcourse"}/>
      <h1>Find Your Next Course!</h1>
      <SearchBar/>
      <CourseContainer />
    </div>
  )
}

export default Courses