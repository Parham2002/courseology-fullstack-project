import "./CoursesPage.scss"
import React from 'react'
import CourseContainer from "../../Containers/CourseContainer/CourseContainer"
import SearchBar from "../../Components/SearchBar/SearchBar"
import Button from "../../Components/Button/Button"
import { useState } from "react"

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="course-page-container">
      <Button name={"Add Course"} link={"./addcourse"}/>
      <h1>Find Your Next Course!</h1>
      <SearchBar setSearchTerm={setSearchTerm}/>
      <CourseContainer  searchTerm={searchTerm}/>
    </div>
  )
}

export default Courses