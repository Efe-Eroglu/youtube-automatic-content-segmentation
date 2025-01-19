from flask import Blueprint, request, jsonify
import requests

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
