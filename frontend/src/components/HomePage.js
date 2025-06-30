import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center p-6 min-h-screen w-full h-full"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center">
        Craft Your Perfect Resume Effortlessly
      </h1>
      <div className="flex justify-center w-full">
        <button
          onClick={() => navigate('/name')}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default HomePage;
