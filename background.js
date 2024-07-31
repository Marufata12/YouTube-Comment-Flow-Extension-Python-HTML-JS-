chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.videoId) {
        const API_KEY = 'PUT HERE YOUR API KEY(YouTube Data API v3 v3)';  
        const baseUrl = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${request.videoId}&key=${API_KEY}&order=relevance`;

        fetch(baseUrl)
            .then(response => response.json())
            .then(data => {
                const comments = data.items ? data.items.map(item => item.snippet.topLevelComment.snippet.textDisplay) : [];
                sendResponse({ comments: comments });
            })
            .catch(error => console.error('Error fetching comments:', error));
        
        return true;  
    }
});















