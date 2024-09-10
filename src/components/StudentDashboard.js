
import React, { useState } from 'react';



const getRandomFutureDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 365) + 1; 
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + randomDays);
    return futureDate.toLocaleDateString(); 
  };


const enrolledCourses = [
  {
    id: 1,
    name: "React Development",
    instructor: "John Doe",
    thumbnail: "https://blog.logrocket.com/wp-content/uploads/2023/10/complete-guide-react-refs.png", 
    progress: 40, 
    dueDate: getRandomFutureDate()
  },
  {
    id: 2,
    name: "Node.js Fundamentals",
    instructor: "Jane Smith",
    thumbnail: "https://andrewbeeken.co.uk/wp-content/uploads/2018/11/nodejs.jpg?w=1200", 
    progress: 75, 
    dueDate: getRandomFutureDate()
  },
  
];

const StudentDashboard = () => {
  const [courses, setCourses] = useState(enrolledCourses);

  const markAsCompleted = (id) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, progress: 100 } : course
    ));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Dashboard</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {courses.map(course => (
          <li key={course.id} style={{ border: "1px solid #ddd", borderRadius: "5px", padding: "10px", marginBottom: "10px", display: "flex", alignItems: "center" }}>
            <img src={course.thumbnail} alt={course.name} style={{ width: "100px", height: "auto", borderRadius: "5px", marginRight: "15px" }} />
            <div style={{ flex: 1 }}>
              <h2 style={{ margin: 0 }}>{course.name}</h2>
              <p style={{ margin: "5px 0" }}><strong>Instructor:</strong> {course.instructor}</p>
              <p style={{ margin: "5px 0" }}><strong>Due Date:</strong> {course.dueDate}</p>
              <div style={{ margin: "10px 0", position: "relative" }}>
              <span style={{ position: "absolute", right: "0", top: "-20px", transform: "translateY(-50%)", padding: "0 10px" }}>{course.progress}%</span>
                <div style={{ width: "100%", height: "8px", backgroundColor: "#f3f3f3", borderRadius: "5px" }}>
                
                  <div style={{ width: `${course.progress}%`, height: "100%", backgroundColor: "#4caf50", borderRadius: "5px" }}></div>
                </div>
                
              </div>
              {course.progress < 100 && (
                <button onClick={() => markAsCompleted(course.id)} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                  Mark as Completed
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
