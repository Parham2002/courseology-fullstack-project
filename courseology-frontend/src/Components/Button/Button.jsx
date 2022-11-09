import React from 'react'
import "./Button.scss"
import { Link } from 'react-router-dom'

const Button = ({name, link, onclick, type}) => {
  return (
    <>
    <Link to={link}>
    <button className='button' onClick={onclick} type={type}>{name}</button>
    </Link>
    </>
  )
}

export default Button