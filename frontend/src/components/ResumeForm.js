import React, { useState } from 'react';
import UploadResume from './UploadResume';
import AIEnhanceButton from './AIEnhanceButton';
import axios from 'axios';

function ResumeForm() {
  const [resume, setResume] = useState({
    name: '',
    experience: '',
    education: '',
    skills: ''
  });

  const [saveStatus, setSaveStatus] = useState('');

  const handleChange = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };

  const saveResume = async () => {
    try {
      await axios.post('http://localhost:8001/save-resume', resume);
      setSaveStatus('Resume saved successfully!');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      setSaveStatus('Failed to save resume.');
      setTimeout(() => setSaveStatus(''), 3000);
    }
  };

  const downloadResume = () => {
    const blob = new Blob([JSON.stringify(resume, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.json';
    a.click();
  };

  return (
    <div className="space-y-8">
      <UploadResume setResume={setResume} />

      {/* Name Section */}
      <section id="name">
        <label className="block font-semibold text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={resume.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 mb-2"
        />
        <AIEnhanceButton section="name" content={resume.name} setResume={setResume} resume={resume} />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <label className="block font-semibold text-gray-700 mb-1">Experience</label>
        <textarea
          name="experience"
          value={resume.experience}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 mb-2"
          rows={4}
        />
        <AIEnhanceButton section="experience" content={resume.experience} setResume={setResume} resume={resume} />
      </section>

      {/* Education Section */}
      <section id="education">
        <label className="block font-semibold text-gray-700 mb-1">Education</label>
        <textarea
          name="education"
          value={resume.education}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 mb-2"
          rows={4}
        />
        <AIEnhanceButton section="education" content={resume.education} setResume={setResume} resume={resume} />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <label className="block font-semibold text-gray-700 mb-1">Skills</label>
        <input
          type="text"
          name="skills"
          value={resume.skills}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 mb-2"
        />
        <AIEnhanceButton section="skills" content={resume.skills} setResume={setResume} resume={resume} />
      </section>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 pt-4">
        <button
          onClick={saveResume}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow"
        >
          Save Resume
        </button>
        <button
          onClick={downloadResume}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow"
        >
          Download Resume (.json)
        </button>
      </div>
      {saveStatus && (
        <div className="mt-4 text-green-600 font-semibold">
          {saveStatus}
        </div>
      )}
    </div>
  );
}

export default ResumeForm;
