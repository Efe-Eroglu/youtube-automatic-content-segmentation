from flask import Flask
from .routes.youtube_routes import youtube_bp


def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(youtube_bp, url_prefix = "/api")
    
    return app

