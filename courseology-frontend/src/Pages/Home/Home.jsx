import "./Home.scss";
import Button from "../../Components/Button/Button"

import React from 'react'

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Courseology!</h1>
      <Button name="Take a look at Courses!" link="/courses"/>
    </div>
  )
}

export default Home