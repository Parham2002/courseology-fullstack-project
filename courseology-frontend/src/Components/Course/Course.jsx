import React from 'react'
import Button from '../Button/Button'
import "./Course.scss"
import noImage from "../../Assets/Images/no_image.png"

const Course = ({name}) => {
  return (
    <div className='course-card'>
      <img className='course-card__img' src={noImage} alt="no_image" />
      <div className='course-card__name'>{name}</div>
      <Button name={"More Info"} link={"/course"}/>
    </div>
  )
}

export default Course