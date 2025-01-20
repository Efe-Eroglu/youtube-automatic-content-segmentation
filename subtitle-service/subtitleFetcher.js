import express from "express";
import scraper from "youtube-captions-scraper";

const app = express();
app.use(express.json());

const fetchSubtitles = async (videoId, lang) => {
  try {
    const captions = await scraper.getSubtitles({
      videoID: videoId,
      lang: lang,
    });

    if (!captions || captions.length === 0) {
      return { error: "No subtitles found for the requested language." };
    }

    const subtitles = captions.map((caption) => ({
      start: caption.start,
      duration: caption.dur,
      text: caption.text,
    }));

    return { language: lang, subtitles };
  } catch (error) {
    console.error("Error fetching subtitles:", error);
    return { error: "Failed to fetch subtitles." };
  }
};

app.post("/fetchSubtitles", async (req, res) => {
  const { videoUrl, lang = "en" } = req.body;

  if (!videoUrl) {
    return res.status(400).json({ error: "Video URL is required" });
  }

  const videoId = new URL(videoUrl).searchParams.get("v");
  if (!videoId) {
    return res.status(400).json({ error: "Invalid YouTube URL." });
  }

  const subtitles = await fetchSubtitles(videoId, lang);
  if (subtitles.error) {
    return res.status(404).json(subtitles);
  }

  res.json(subtitles);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Subtitle service running at http://localhost:${PORT}`);
});
