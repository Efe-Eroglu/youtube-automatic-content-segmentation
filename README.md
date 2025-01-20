<div align="center"> 
<h1>YouTube Video Content Segmentation</h1> 
</div>

## Overview
The *YouTube Video Content Segmentation* project is a full-stack web application designed to help users analyze and summarize YouTube video content. It leverages *Node.js* for subtitle extraction, *Flask* for AI-driven segmentation using OpenAI GPT, and a *React.js* frontend for seamless interaction and visualization.

This tool is ideal for educators, content creators, and researchers who need structured, topic-based insights from video content.

<br>

## Features
- *Subtitle Extraction*: Retrieves subtitles from YouTube videos using a Node.js service.
- *AI-Powered Content Segmentation*: Flask backend integrates OpenAI GPT to analyze subtitles and segment video content into topic-based sections with timestamps.
- *Interactive UI*: Modern React.js frontend for fetching subtitles, segmenting videos, and visualizing structured results.
- *Dynamic and Real-Time Processing*: Handles video content dynamically with immediate segmentation results.



<br>




## Technology Stack
### *Frontend*
- *React.js*: Provides a dynamic and user-friendly interface.
### *Backend*
- *Node.js*: Handles YouTube subtitle extraction using third-party APIs.
- *Flask*: Manages AI processing and API integration with OpenAI GPT.
### *AI Integration*
- *OpenAI GPT*: Segments and summarizes video subtitles into topic-based insights.


<br>



## Architecture
The project architecture consists of three main components:
1. *Frontend (React.js)*: Displays input forms, segmented content, and results in a visually appealing manner.
2. *Backend (Flask)*: Processes subtitles and interacts with OpenAI GPT to generate segmented content.
3. *Node.js Service*: Extracts subtitles from YouTube videos, which are then passed to the Flask backend for processing.

<br>


## Project Overview

![output](https://github.com/user-attachments/assets/58e383d1-560f-43dd-8e5d-6c6b2049c501)



## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Efe-Eroglu/youtube-automatic-content-segmentation.git
cd youtube-segmentation
```

### 2. Backend Setup(Flask)

```bash
python run.py
```


 ### 3. Subtitle Service Setup
```bash
cd subtitle-service
node subtitleFetcher.js
```


### 4. Frontend Setup
```bash
cd frontend
```

Install Dependencies

```bash
npm install
```


Start The Server
```bash
npm start
```

<br>



## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. **Enter a YouTube Video URL** in the left panel.
3. Click **Fetch Subtitles** to retrieve subtitles for the given video.
4. Click **Segment Video** to process the subtitles and generate topic-based content segmentation.
5. View the segmented topics and their respective timestamps displayed in the right panel.


<br>




## Contribution

Contributions are welcome! If you want to improve this project, feel free to fork the repository, create a feature branch, and submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeatureName`.
3. Make your changes and commit them: `git commit -m 'Add your feature here'`.
4. Push to the branch: `git push origin feature/YourFeatureName`.
5. Open a pull request.

<br>


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



