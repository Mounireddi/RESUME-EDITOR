import React from 'react';
import AIEnhanceButton from './AIEnhanceButton';

function SkillsPage() {
  const [skills, setSkills] = React.useState('');

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-4"
        placeholder="Enter your skills"
      />
      <AIEnhanceButton section="skills" content={skills} setResume={(updated) => setSkills(updated.skills)} resume={{ skills }} />
    </div>
  );
}

export default SkillsPage;
