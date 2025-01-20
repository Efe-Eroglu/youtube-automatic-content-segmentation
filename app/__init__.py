from flask import Flask
from .routes.youtube_routes import youtube_bp
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)    
    app.register_blueprint(youtube_bp, url_prefix = "/api")
    
    return app

