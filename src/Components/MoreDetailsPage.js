import React from 'react';

const MoreDetailsPage = ({ projects }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>{projects.title}</h1>
      <img src={projects.image} alt={projects.title} style={{ display: "block", margin: "0 auto", maxWidth: "100%" }} />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>{projects.details}</p> {/* Assuming you have more detailed information */}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href={projects.url}>
          <button>Visit Official Page</button>
        </a>
      </div>
    </div>
  );
}

export default MoreDetailsPage;
