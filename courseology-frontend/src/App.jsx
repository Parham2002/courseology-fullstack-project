import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/CoursesPage';
import Layout from "./Pages/Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage"
import AddCourse from './Pages/AddCourse/AddCourse';
import EditCourse from './Pages/EditCourse/EditCourse';
import Course from "./Pages/Course/Course"

function App() {
  return (
    <div className='main-frame'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="course" element={<Course/>} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/addcourse" element={<AddCourse/>} />
            <Route path="course/editcourse" element={<EditCourse/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
