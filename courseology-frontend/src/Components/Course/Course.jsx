import React from 'react'
import Button from '../Button/Button'
import "./Course.scss"

const Course = ({name}) => {
  return (
    <div className='course-card'>
    <div className='course-card__name'>{name}</div>
    <Button name={"More Info"} link={"/course"}/>
    </div>
  )
}

export default Course