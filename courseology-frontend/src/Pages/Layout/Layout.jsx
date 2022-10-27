import React from 'react'
import "./Layout.scss"
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div className='header-container'>
      <div className='header-container__title'>_courseology</div>
      <nav>
        <ul className='header-container__lists'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className='mainPage-container'>
      <Outlet/>
    </div>
    </>
  )
};

export default Layout