import React, { useState } from "react";
import FetchSubtitles from "./components/FetchSubtitles";
import SubtitleDisplay from "./components/SubtitleDisplay";

const App = () => {
  const [subtitles, setSubtitles] = useState([]);

  const handleFetchComplete = (segments) => {
    setSubtitles(segments);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <FetchSubtitles onFetchComplete={handleFetchComplete} />
      <SubtitleDisplay subtitles={subtitles} />
    </div>
  );
};

export default App;
