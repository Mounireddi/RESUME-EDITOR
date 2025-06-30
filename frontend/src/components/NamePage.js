import React from 'react';
import AIEnhanceButton from './AIEnhanceButton';

function NamePage() {
  const [name, setName] = React.useState('');

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Name</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-4"
        placeholder="Enter your name"
      />
      <AIEnhanceButton section="name" content={name} setResume={(updated) => setName(updated.name)} resume={{ name }} />
    </div>
  );
}

export default NamePage;
