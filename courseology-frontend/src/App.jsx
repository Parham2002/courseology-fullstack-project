import './App.scss';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path ="/Courses" element={<Courses/>} />
    </Routes>
  );
}

export default App;
