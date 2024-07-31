from flask import Flask, render_template, jsonify, request
import requests
from config import Config
from waitress import serve

app = Flask(__name__)
app.config.from_object(Config)

API_KEY = app.config['PUT HERE YOUR API KEY(YouTube Data API v3 v3)']
BASE_URL = 'https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&order=relevance'

def fetch_comments(video_id, max_results=100):
    comments = []
    url = f'{BASE_URL}&videoId={video_id}&key={API_KEY}'
    while url and len(comments) < max_results:
        response = requests.get(url)
        data = response.json()
        comments.extend([item['snippet']['topLevelComment']['snippet']['textDisplay'] for item in data.get('items', [])])
        
        next_page_token = data.get('nextPageToken')
        if next_page_token:
            url = f'{BASE_URL}&videoId={video_id}&key={API_KEY}&pageToken={next_page_token}'
        else:
            break

    return comments[:max_results]

@app.route('/comments')
def comments():
    video_id = request.args.get('videoId')
    comments = fetch_comments(video_id, max_results=50)
    return jsonify({'comments': comments})

if __name__ == '__main__':
    serve(app, host='0.0.0.0', port=8080)


