from flask import Blueprint, request, jsonify
from app.services.youtube_service import fetch_youtube_subtitles
from app.services.summarizer_service import summarize_text

youtube_bp = Blueprint("youtube", __name__)


@youtube_bp.route("/summarize", methods=["POST"])
def summarize_video():
    data = request.json
    video_url = data.get("url")
    
    if not video_url:
        return jsonify({"error": "Video url is required"}), 400
    
    subtitles = fetch_youtube_subtitles(video_url)
    if not subtitles:
        return jsonify({"error": "Failed to fetch subtitles"}),500
    
    summary = summarize_text(subtitles)
    return jsonify({"summary":summary})