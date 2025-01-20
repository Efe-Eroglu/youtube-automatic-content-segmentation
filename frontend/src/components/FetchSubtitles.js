import React, { useState } from "react";
import axios from "axios";

const FetchSubtitles = ({ onFetchComplete }) => {
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    if (!videoUrl) {
      setError("Please enter a valid YouTube URL.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/fetch_subtitles",
        {
          videoUrl,
          lang: "en",
        }
      );

      if (response.data.subtitles) {
        onFetchComplete(response.data.subtitles);
      } else {
        setError("No subtitles found for this video.");
      }
    } catch (err) {
      setError("Failed to fetch subtitles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Fetch YouTube Subtitles</h2>
      <input
        type="text"
        placeholder="Enter YouTube video URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        style={{
          padding: "10px",
          width: "70%",
          border: "1px solid #ccc",
          borderRadius: "4px",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={handleFetch}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {loading ? "Fetching..." : "Fetch Subtitles"}
      </button>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default FetchSubtitles;
