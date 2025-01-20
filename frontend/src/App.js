import React, { useState } from "react";
import FetchSubtitles from "./components/FetchSubtitles";
import SegmentationDisplay from "./components/SegmentationDisplay";

const App = () => {
  const [segments, setSegments] = useState([]);

  const handleFetchSubtitles = (subtitles) => {
    console.log("Fetched Subtitles:", subtitles);
  };

  const handleSegmentation = (segmentedData) => {
    setSegments(segmentedData);
    console.log("Segmented Data:", segmentedData);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 1, borderRight: "1px solid #ccc", overflowY: "auto" }}>
        <FetchSubtitles
          onFetchSubtitles={handleFetchSubtitles}
          onSegmentation={handleSegmentation}
        />
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        <SegmentationDisplay segments={segments} />
      </div>
    </div>
  );
};

export default App;
