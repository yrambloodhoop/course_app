import React, { useState } from "react";
import { Link } from "react-router-dom";


const courses = [
    { id: 1, name: "React Development", instructor: "John Doe" },
    { id: 2, name: "Node.js Fundamentals", instructor: "Jane Smith" },
    { id: 3, name: "Frontend Design", instructor: "Alice Johnson" },
    { id: 4, name: "Python for Data Science", instructor: "Michael Brown" },
    { id: 5, name: "Introduction to Machine Learning", instructor: "Emily Davis" },
    { id: 6, name: "Advanced CSS Techniques", instructor: "David Wilson" },
    { id: 7, name: "Backend Development with Django", instructor: "Sophia Martinez" },
    { id: 8, name: "Full-Stack Web Development", instructor: "James Lee" },
    { id: 9, name: "Database Management Systems", instructor: "Olivia Garcia" },
    { id: 10, name: "Introduction to JavaScript", instructor: "Benjamin Taylor" },
    { id: 11, name: "Building RESTful APIs", instructor: "Charlotte Anderson" },
    { id: 12, name: "Cybersecurity Basics", instructor: "Liam Harris" },
    { id: 13, name: "UI/UX Design Principles", instructor: "Amelia Clark" },
    { id: 14, name: "DevOps Essentials", instructor: "Ethan Lewis" },
    { id: 15, name: "Game Development with Unity", instructor: "Avery Walker" },
    { id: 16, name: "Data Visualization with D3.js", instructor: "Mia Allen" },
    { id: 17, name: "Introduction to Cloud Computing", instructor: "Jacob Young" },
    { id: 18, name: "Angular for Beginners", instructor: "Harper Scott" },
    { id: 19, name: "Software Testing and QA", instructor: "Ella Adams" },
    
  ];
  
const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState("");


  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Course List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "20px", padding: "10px", width: "100%", boxSizing: "border-box" }}
      />

      {/* Course List */}
      <ul style={{ listStyleType: "none", padding: "0", maxHeight: "400px", overflowY: "scroll" }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <li key={course.id} style={{ marginBottom: "10px" }}>
               
              <Link
                to={`/course/${course.id}`}
                style={{ textDecoration: "none", color: "#007bff", fontSize: "18px" }}
              >
                 {course.id}. {course.name} - Instructor: {course.instructor}
              </Link>
            </li>
          ))
        ) : (
          <li>No courses found</li>
        )}
      </ul>
    </div>
  );
};

export default CourseList;
