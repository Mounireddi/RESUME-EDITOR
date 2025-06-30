import React from 'react';
import AIEnhanceButton from './AIEnhanceButton';

function EducationPage() {
  const [education, setEducation] = React.useState('');

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      <textarea
        value={education}
        onChange={(e) => setEducation(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-4"
        rows={6}
        placeholder="Enter your education"
      />
      <AIEnhanceButton section="education" content={education} setResume={(updated) => setEducation(updated.education)} resume={{ education }} />
    </div>
  );
}

export default EducationPage;
