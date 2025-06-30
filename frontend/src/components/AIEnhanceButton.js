
import React from 'react';
import axios from 'axios';

function AIEnhanceButton({ section, content, setResume, resume }) {
  const enhance = async () => {
    const res = await axios.post('http://localhost:8001/enhance', {
      section,
      content
    });
    setResume({ ...resume, [section]: res.data.summary });
  };

  return <button onClick={enhance}>Enhance with AI</button>;
}

export default AIEnhanceButton;
