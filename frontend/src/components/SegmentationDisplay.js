import React from "react";

const SegmentationDisplay = ({ segments }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Segmented Video Topics</h3>
      {segments.length === 0 ? (
        <p style={styles.emptyMessage}>
          No segments available. Please process the video.
        </p>
      ) : (
        segments.map((segment, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.timestamp}>
              <strong>Timestamp:</strong> {segment.timestamp}
            </p>
            <p style={styles.topic}>
              <strong>Topic:</strong> {segment.topic}
            </p>
            <p style={styles.content}>
              <strong>Content:</strong> {segment.content}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#2c2c2c",
    color: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    height: "100%",
    overflowY: "auto", 
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    color: "#ffffff",
  },
  emptyMessage: {
    textAlign: "center",
    fontSize: "16px",
    color: "#999999",
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
    fontSize: "16px",
    color: "#cccccc",
    marginBottom: "8px",
  },
  topic: {
    fontSize: "16px",
    color: "#ffffff",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  content: {
    fontSize: "16px",
    color: "#ffffff",
  },
};

export default SegmentationDisplay;
