import React from 'react'
import "./Button.scss"
import { Link } from 'react-router-dom'

const Button = ({name, link}) => {
  return (
    <>
    <Link to={link}>
    <button className='button'>{name}</button>
    </Link>
    </>
  )
}

export default Button