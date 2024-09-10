
import React from "react";
import { useParams, Link } from "react-router-dom";

// Static data for individual courses
const courseData = {
    1: {
      name: "React Development",
      instructor: "John Doe",
      description: "Learn React from scratch.",
      enrollmentStatus: "Open",
      duration: "12 weeks",
      schedule: "Mon, Wed, Fri - 10 AM to 12 PM",
      location: "Online",
      prerequisites: "Basic understanding of JavaScript",
      syllabus: ["Introduction to React", "State and Props", "Hooks", "Routing"],
    },
    2: {
      name: "Node.js Fundamentals",
      instructor: "Jane Smith",
      description: "A comprehensive course on Node.js.",
      enrollmentStatus: "In Progress",
      duration: "8 weeks",
      schedule: "Tue, Thu - 2 PM to 4 PM",
      location: "Online",
      prerequisites: "Understanding of JavaScript",
      syllabus: ["Introduction to Node.js", "Express.js", "API Development"],
    },
    3: {
      name: "Frontend Design",
      instructor: "Alice Johnson",
      description: "Learn how to design stunning UIs.",
      enrollmentStatus: "Closed",
      duration: "10 weeks",
      schedule: "Mon, Fri - 4 PM to 6 PM",
      location: "Online",
      prerequisites: "None",
      syllabus: ["UI Principles", "Design Systems", "Responsive Design"],
    },
    4: {
      name: "Python for Data Science",
      instructor: "Michael Brown",
      description: "A deep dive into Python for analyzing data.",
      enrollmentStatus: "Open",
      duration: "14 weeks",
      schedule: "Mon, Wed - 1 PM to 3 PM",
      location: "Online",
      prerequisites: "Basic Python knowledge",
      syllabus: ["Introduction to Python", "Data Analysis with Pandas", "Data Visualization", "Machine Learning Basics"],
    },
    5: {
      name: "Introduction to Machine Learning",
      instructor: "Emily Davis",
      description: "Understand the fundamentals of machine learning.",
      enrollmentStatus: "Open",
      duration: "10 weeks",
      schedule: "Tue, Thu - 10 AM to 12 PM",
      location: "Online",
      prerequisites: "Basic statistics and programming",
      syllabus: ["Introduction to Machine Learning", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
    },
    6: {
      name: "Advanced CSS Techniques",
      instructor: "David Wilson",
      description: "Explore advanced techniques in CSS for modern web design.",
      enrollmentStatus: "In Progress",
      duration: "6 weeks",
      schedule: "Mon, Wed - 3 PM to 5 PM",
      location: "Online",
      prerequisites: "Basic understanding of CSS",
      syllabus: ["CSS Grid", "Flexbox", "Animations", "Responsive Design"],
    },
    7: {
      name: "Backend Development with Django",
      instructor: "Sophia Martinez",
      description: "Build scalable backend applications with Django.",
      enrollmentStatus: "Open",
      duration: "12 weeks",
      schedule: "Tue, Thu - 4 PM to 6 PM",
      location: "Online",
      prerequisites: "Basic Python knowledge",
      syllabus: ["Introduction to Django", "Django Models", "Django Views", "REST APIs with Django"],
    },
    8: {
      name: "Full-Stack Web Development",
      instructor: "James Lee",
      description: "Learn both frontend and backend development skills.",
      enrollmentStatus: "Open",
      duration: "16 weeks",
      schedule: "Mon, Wed, Fri - 9 AM to 12 PM",
      location: "Online",
      prerequisites: "Basic web development knowledge",
      syllabus: ["HTML & CSS", "JavaScript & React", "Node.js & Express", "Database Integration"],
    },
    9: {
      name: "Database Management Systems",
      instructor: "Olivia Garcia",
      description: "Understand the principles of managing and querying databases.",
      enrollmentStatus: "Closed",
      duration: "8 weeks",
      schedule: "Tue, Thu - 1 PM to 3 PM",
      location: "Online",
      prerequisites: "Basic programming knowledge",
      syllabus: ["Database Design", "SQL Queries", "Database Normalization", "Transaction Management"],
    },
    10: {
      name: "Introduction to JavaScript",
      instructor: "Benjamin Taylor",
      description: "Learn the basics of JavaScript programming.",
      enrollmentStatus: "Open",
      duration: "8 weeks",
      schedule: "Mon, Wed - 2 PM to 4 PM",
      location: "Online",
      prerequisites: "None",
      syllabus: ["JavaScript Basics", "Control Structures", "Functions", "DOM Manipulation"],
    },
    11: {
      name: "Building RESTful APIs",
      instructor: "Charlotte Anderson",
      description: "Design and develop RESTful APIs with modern tools.",
      enrollmentStatus: "In Progress",
      duration: "10 weeks",
      schedule: "Tue, Thu - 3 PM to 5 PM",
      location: "Online",
      prerequisites: "Basic programming knowledge",
      syllabus: ["API Design Principles", "RESTful Services", "Authentication & Authorization", "API Documentation"],
    },
    12: {
      name: "Cybersecurity Basics",
      instructor: "Liam Harris",
      description: "Introduction to cybersecurity principles and practices.",
      enrollmentStatus: "Open",
      duration: "6 weeks",
      schedule: "Mon, Wed - 11 AM to 1 PM",
      location: "Online",
      prerequisites: "None",
      syllabus: ["Introduction to Cybersecurity", "Network Security", "Cryptography", "Security Best Practices"],
    },
    13: {
      name: "UI/UX Design Principles",
      instructor: "Amelia Clark",
      description: "Learn the fundamentals of UI/UX design to create user-friendly interfaces.",
      enrollmentStatus: "Open",
      duration: "10 weeks",
      schedule: "Tue, Thu - 10 AM to 12 PM",
      location: "Online",
      prerequisites: "None",
      syllabus: ["Design Thinking", "Wireframing", "Prototyping", "User Testing"],
    },
    14: {
      name: "DevOps Essentials",
      instructor: "Ethan Lewis",
      description: "Understand the core principles of DevOps and its practices.",
      enrollmentStatus: "In Progress",
      duration: "8 weeks",
      schedule: "Mon, Wed - 4 PM to 6 PM",
      location: "Online",
      prerequisites: "Basic understanding of software development",
      syllabus: ["Introduction to DevOps", "Continuous Integration & Delivery", "Infrastructure as Code", "Monitoring & Logging"],
    },
    15: {
      name: "Game Development with Unity",
      instructor: "Avery Walker",
      description: "Create engaging games using the Unity game engine.",
      enrollmentStatus: "Open",
      duration: "12 weeks",
      schedule: "Tue, Thu - 6 PM to 8 PM",
      location: "Online",
      prerequisites: "Basic programming knowledge",
      syllabus: ["Introduction to Unity", "2D & 3D Game Development", "Scripting & Animation", "Game Physics"],
    },
    16: {
      name: "Data Visualization with D3.js",
      instructor: "Mia Allen",
      description: "Learn to create interactive data visualizations using D3.js.",
      enrollmentStatus: "Open",
      duration: "8 weeks",
      schedule: "Mon, Wed - 3 PM to 5 PM",
      location: "Online",
      prerequisites: "Basic understanding of JavaScript",
      syllabus: ["Introduction to D3.js", "Creating Charts & Graphs", "Interactive Visualizations", "Data Binding"],
    },
    17: {
      name: "Introduction to Cloud Computing",
      instructor: "Jacob Young",
      description: "Understand the basics of cloud computing and its services.",
      enrollmentStatus: "In Progress",
      duration: "10 weeks",
      schedule: "Tue, Thu - 2 PM to 4 PM",
      location: "Online",
      prerequisites: "None",
      syllabus: ["Cloud Computing Basics", "AWS Fundamentals", "Google Cloud Platform", "Azure Overview"],
    },
    18: {
        name: "Angular for Beginners",
        instructor: "Harper Scott",
        description: "Learn the basics of Angular framework for building web applications.",
        enrollmentStatus: "Open",
        duration: "10 weeks",
        schedule: "Wed, Fri - 2 PM to 4 PM",
        location: "Online",
        prerequisites: "Basic knowledge of HTML, CSS, and JavaScript",
        syllabus: ["Angular Basics", "Components and Modules", "Data Binding", "Routing"],
      },
      19: {
        name: "Software Testing and QA",
        instructor: "Ella Adams",
        description: "Understand software testing techniques and quality assurance practices.",
        enrollmentStatus: "Closed",
        duration: "8 weeks",
        schedule: "Tue, Thu - 10 AM to 12 PM",
        location: "Online",
        prerequisites: "Basic understanding of software development",
        syllabus: ["Testing Fundamentals", "Manual Testing", "Automated Testing", "Test Strategies"],
      }
}

  
const CourseDetails = () => {
  const { id } = useParams(); 
  const course = courseData[id]; 

  if (!course) {
    return <div style={{ padding: "20px" }}>Course not found!</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>{course.name}</h1>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Enrollment Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Prerequisites:</strong> {course.prerequisites}</p>

      <h2>Syllabus</h2>
      <ul>
        {course.syllabus.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>

      <Link to="/" style={{ display: "inline-block", marginTop: "20px", textDecoration: "none", color: "#007bff" }}>
        Back to Course List
      </Link>
    </div>
  );
};

export default CourseDetails;
