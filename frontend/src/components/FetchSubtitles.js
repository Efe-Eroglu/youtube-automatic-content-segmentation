import React, { useState } from "react";
import axios from "axios";

const FetchSubtitles = ({ onFetchSubtitles, onSegmentation }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [subtitles, setSubtitles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchSubtitles = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/fetch_subtitles", {
        videoUrl,
      });

      if (response.data.subtitles) {
        setSubtitles(response.data.subtitles);
        onFetchSubtitles(response.data.subtitles);
      } else {
        setError("No subtitles found for this video.");
      }
    } catch (err) {
      setError("Failed to fetch subtitles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSegmentVideo = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:5000/api/process_subtitles", {
        subtitles,
      });

      if (response.data.segments) {
        onSegmentation(response.data.segments);
      } else {
        setError("Failed to segment video content.");
      }
    } catch (err) {
      setError("Failed to segment video. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Fetch YouTube Subtitles</h3>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        style={styles.input}
      />
      <div style={styles.buttonContainer}>
        <button
          onClick={handleFetchSubtitles}
          style={styles.buttonPrimary}
          disabled={loading}
        >
          {loading ? "Fetching..." : "Fetch Subtitles"}
        </button>
        <button
          onClick={handleSegmentVideo}
          style={styles.buttonSecondary}
          disabled={loading || subtitles.length === 0}
        >
          {loading ? "Processing..." : "Segment Video"}
        </button>
      </div>
      {error && <p style={styles.error}>{error}</p>}
      <div>
        <h4 style={styles.subtitleTitle}>Fetched Subtitles</h4>
        <ul style={styles.subtitleList}>
          {subtitles.map((subtitle, index) => (
            <li key={index} style={styles.subtitleItem}>
              <strong>
                {subtitle.start}s - {subtitle.duration}s:
              </strong>{" "}
              {subtitle.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    overflow: "hidden",
    backgroundColor: "#2c2c2c",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    color: "#ffffff",
  },
  title: {
    color: "#ffffff",
    fontSize: "22px",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #555",
    borderRadius: "4px",
    backgroundColor: "#3c3c3c",
    color: "#ffffff",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  buttonPrimary: {
    padding: "10px 20px",
    backgroundColor: "#316192FF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttonSecondary: {
    padding: "10px 20px",
    backgroundColor: "#1EC108FF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "#ff4d4d",
    marginTop: "10px",
  },
  subtitleTitle: {
    marginTop: "20px",
    fontSize: "18px",
    color: "#cccccc",
  },
  subtitleList: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  subtitleItem: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #555",
    borderRadius: "4px",
    backgroundColor: "#3c3c3c",
  },
  
};

export default FetchSubtitles;
