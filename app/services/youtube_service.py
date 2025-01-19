from pytube import YouTube

def fetch_youtube_subtitles(video_url):
    try:
        yt = YouTube(video_url)
        print(f"Video title : {yt.title}")
        captions = yt.captions.get_by_language_code("en")
        
        if not captions:
            print("No english subtitles available for this video.")
            return None
        
        return captions.generate_srt_captions()
    
    except Exception as e:
        print(f"Error fetching subtitles {e}")
        
        return None