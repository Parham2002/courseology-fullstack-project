import './App.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Courses from './Pages/Courses/Courses';
import Layout from "./Pages/Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
