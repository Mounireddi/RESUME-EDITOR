import React from 'react';
import AIEnhanceButton from './AIEnhanceButton';

function ExperiencePage() {
  const [experience, setExperience] = React.useState('');

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <textarea
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-4"
        rows={6}
        placeholder="Enter your experience"
      />
      <AIEnhanceButton section="experience" content={experience} setResume={(updated) => setExperience(updated.experience)} resume={{ experience }} />
    </div>
  );
}

export default ExperiencePage;
