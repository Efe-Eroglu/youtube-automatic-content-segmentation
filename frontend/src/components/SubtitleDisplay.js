import React from "react";

const SubtitleDisplay = ({ subtitles }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Video Subtitles</h3>
      {subtitles.length === 0 ? (
        <p style={styles.emptyMessage}>No subtitles available.</p>
      ) : (
        subtitles.map((segment, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.timestamp}>
              <strong>Start Time:</strong> {parseFloat(segment.start).toFixed(2)}s
            </p>
            <p style={styles.timestamp}>
              <strong>Duration:</strong> {parseFloat(segment.duration).toFixed(2)}s
            </p>
            <p style={styles.content}>
              <strong>Text:</strong> {segment.text}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    margin: "20px auto",
    width: "80%",
    textAlign: "left",
    backgroundColor: "#2c2c2c",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "22px",
    color: "#ffffff",
    marginBottom: "20px",
  },
  emptyMessage: {
    fontSize: "16px",
    color: "#999",
  },
  card: {
    padding: "15px",
    marginBottom: "15px",
    border: "1px solid #444",
    borderRadius: "8px",
    backgroundColor: "#3c3c3c",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  timestamp: {
    marginBottom: "5px",
    fontSize: "16px",
    color: "#cccccc",
  },
  content: {
    fontSize: "16px",
    color: "#ffffff",
  },
};

export default SubtitleDisplay;
