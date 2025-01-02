import React from 'react';
import './../Components/DownloadCV.css'; // We'll create this CSS file next

const DownloadCV = () => {
  const handleDownload = () => {
    // Replace this URL with the actual path to your CV file
    const cvUrl = process.env.PUBLIC_URL + "/Nasreen Akhter Developer.pdf";
    
    // Create an anchor element and trigger the download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = "nasreen-cv.pdf"; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
     
    
    <button onClick={handleDownload} className="download-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      Download Resume
    </button>
  );
};

export default DownloadCV;

