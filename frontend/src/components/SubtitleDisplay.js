import React from "react";

const SubtitleDisplay = ({ subtitles }) => {
  return (
    <div style={{ margin: "20px auto", width: "80%", textAlign: "left" }}>
      <h2>Video Subtitles</h2>
      {subtitles.length === 0 ? (
        <p>No subtitles available.</p>
      ) : (
        subtitles.map((segment, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <strong>Start Time:</strong> {parseFloat(segment.start).toFixed(2)}s
            <br />
            <strong>Duration:</strong> {parseFloat(segment.duration).toFixed(2)}s
            <br />
            <strong>Text:</strong> {segment.text}
          </div>
        ))
      )}
    </div>
  );
};

export default SubtitleDisplay;
