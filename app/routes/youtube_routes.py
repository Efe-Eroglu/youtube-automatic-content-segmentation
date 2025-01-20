from flask import Blueprint, request, jsonify
import requests
import json
from app.services.summarizer_service import send_to_chatgpt

youtube_bp = Blueprint("youtube", __name__)

@youtube_bp.route("/fetch_subtitles", methods=["POST"])
def fetch_subtitles():
    """
    Fetch subtitles using the Node.js service.
    """
    data = request.json
    video_url = data.get("videoUrl")
    lang = data.get("lang", "en")

    if not video_url:
        return jsonify({"error": "Video URL is required"}), 400

    try:
        response = requests.post(
            "http://localhost:3000/fetchSubtitles",
            json={"videoUrl": video_url, "lang": lang},
        )

        if response.status_code == 200:
            return jsonify(response.json())
        else:
            return jsonify({"error": "Failed to fetch subtitles from Node.js"}), response.status_code

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@youtube_bp.route("/process_subtitles", methods=["POST"])
def process_subtitles():
    data = request.json
    subtitles = data.get("subtitles")
    
    if not subtitles:
        return jsonify({"error":"Subtitles are required"}),400
    
    try:
        json_content = json.dumps(subtitles, index = 4, ensure_ascii = False)
        
        prompt = (
            "The following is a JSON containing subtitles of a Youtube video:\\n"
            f"{json_content}\n\n"
            "Please analyze this video content and automatically segment it into meaningful sections with timestamps."
        )
        
        response = send_to_chatgpt()    

        return jsonify({"segments":response})
    
    except Exception as e:
        return jsonify({"error": str(e)}),500