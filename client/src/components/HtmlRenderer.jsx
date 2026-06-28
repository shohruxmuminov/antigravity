import React from 'react';

export default function HtmlRenderer({ filePath }) {
  if (!filePath) return <div className="p-4 text-center">No content available</div>;
  
  // filePath should be something like '168393939-test.html'
  const url = `http://localhost:3001/uploads/${filePath}`;

  return (
    <iframe 
      src={url} 
      className="iframe-container" 
      title="Test Content"
      sandbox="allow-scripts allow-same-origin"
    />
  );
}
