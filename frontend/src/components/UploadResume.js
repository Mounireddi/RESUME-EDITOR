
import React from 'react';

function UploadResume({ setResume }) {
  const mockParseResume = () => {
    const dummyData = {
      name: 'Jane Doe',
      experience: '2 years at Tech Corp',
      education: 'B.Sc. in Computer Science',
      skills: 'React, Python, FastAPI'
    };
    setResume(dummyData);
  };

  return (
    <div>
      <input type="file" accept=".pdf,.docx" />
      <button onClick={mockParseResume}>Mock Parse</button>
    </div>
  );
}

export default UploadResume;
