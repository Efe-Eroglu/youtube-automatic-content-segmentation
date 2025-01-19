from pytube import YouTube

def fetch_youtube_subtitles(video_url):
    try:
        yt = YouTube(video_url)
        captions = yt.captions.get_by_language_code("en")
        
        return captions.generate_srt_captions() if captions else None
    
    except Exception as e:
        print(f"Error fetching subtitles {e}")
        
        return None