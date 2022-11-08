import React from 'react'
import "./Button.scss"
import { Link } from 'react-router-dom'

const Button = ({name, link, onclick}) => {
  return (
    <>
    <Link to={link}>
    <button className='button' onClick={onclick}>{name}</button>
    </Link>
    </>
  )
}

export default Button