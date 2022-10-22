import React from 'react'
import "./Course.scss"

const Course = ({name}) => {
  return (
    <div className='course'>{name}</div>
  )
}

export default Course