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
    <div style={styles.appContainer}>
      <div style={styles.leftPanel}>
        <FetchSubtitles
          onFetchSubtitles={handleFetchSubtitles}
          onSegmentation={handleSegmentation}
        />
      </div>
      <div style={styles.rightPanel}>
        <SegmentationDisplay segments={segments} />
      </div>
    </div>
  );
};

const styles = {
  appContainer: {
    display: "flex",
    height: "100vh",
  },
  leftPanel: {
    flex: 1,
    borderRight: "1px solid #ccc",
    overflowY: "scroll",
    scrollbarWidth: "none", 
    msOverflowStyle: "none",
  },
  rightPanel: {
    flex: 1,
    overflowY: "scroll",
    scrollbarWidth: "none", 
    msOverflowStyle: "none", 
  },
};

const globalStyle = document.createElement("style");
globalStyle.innerHTML = `
  ::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(globalStyle);

export default App;
