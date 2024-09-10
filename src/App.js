
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import CourseDetails from "./components/CourseDetails";
import CourseList from "./components/CourseList";
import StudentDashboard from "./components/StudentDashboard";
import NavBar from "./components/Navbar";

const App = () => (
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<CourseList />} />
      <Route path="/course/:id" element={<CourseDetails />} />
      <Route path="/dashboard" element={<StudentDashboard />} />
      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  </Router>
);

export default App;
