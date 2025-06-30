
import React from 'react';
import ResumeForm from './components/ResumeForm';
import './index.css';
import { FaUser, FaBriefcase, FaGraduationCap, FaTools } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">

          {/* Heading with Icon */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold text-blue-700 mb-8 flex items-center gap-3">
              <FiEdit className="text-blue-500 w-10 h-10" />
              Craft Your Perfect Resume Effortlessly
            </h1>

            {/* Centered Navbar */}
            <nav className="navbar">
              <a href="#name" className="flex items-center text-blue-600 font-medium hover:underline gap-1">
                <FaUser /> Name
              </a>
              <a href="#experience" className="flex items-center text-blue-600 font-medium hover:underline gap-1">
                <FaBriefcase /> Experience
              </a>
              <a href="#education" className="flex items-center text-blue-600 font-medium hover:underline gap-1">
                <FaGraduationCap /> Education
              </a>
              <a href="#skills" className="flex items-center text-blue-600 font-medium hover:underline gap-1">
                <FaTools /> Skills
              </a>
            </nav>
          </div>

          {/* Resume Form */}
          <ResumeForm />
        </div>
    </div>
  );
}

export default App;
