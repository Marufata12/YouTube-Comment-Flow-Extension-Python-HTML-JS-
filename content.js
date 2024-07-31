(function() {
    function getVideoId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('v');
    }

    const videoId = getVideoId();
    if (videoId) {
        chrome.runtime.sendMessage({ videoId: videoId }, (response) => {
            console.log('Comments fetched:', response.comments);
            if (response.comments && response.comments.length > 0) {
                addScrollingComments(response.comments);
            }
        });
    }

    function addScrollingComments(comments) {
        const commentsDiv = document.createElement('div');
        commentsDiv.id = 'scrolling-comments';
        commentsDiv.style.position = 'fixed';
        commentsDiv.style.bottom = '100px';  
        commentsDiv.style.width = '100%';
        commentsDiv.style.background = 'rgba(0, 0, 0, 0.8)';
        commentsDiv.style.color = '#fff';
        commentsDiv.style.whiteSpace = 'nowrap';
        commentsDiv.style.overflow = 'hidden';
        commentsDiv.style.padding = '10px';
        commentsDiv.style.zIndex = '10000';
        commentsDiv.style.fontSize = 'large';

        const commentsContent = document.createElement('div');
        commentsContent.style.display = 'inline-block';
        commentsContent.style.paddingLeft = '100%';
        commentsContent.style.animation = 'scroll-left 45s linear infinite';

        comments.forEach(comment => {
            const commentText = document.createElement('span');
            commentText.innerHTML = comment;
            commentText.style.marginRight = '50px';
            commentText.style.fontSize = 'large';  
            commentText.style.fontWeight = 'bold';
            commentsContent.appendChild(commentText);
        });

        commentsDiv.appendChild(commentsContent);
        document.body.appendChild(commentsDiv);

        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            #scrolling-comments span {
                font-size: large !important; 
                font-weight: bold !important; 
                color: #fff !important; 
            }
            @keyframes scroll-left {
                0% { transform: translateX(100%); }
                100% { transform: translateX(-100%); }
            }
        `;
        document.getElementsByTagName('head')[0].appendChild(style);

        async function startCommentsDisplay() {
            const delay = 5000; 
            let currentIndex = 0;

            if (comments.length > 0) {
                displayComment(comments[currentIndex]);

                setInterval(() => {
                    currentIndex = (currentIndex + 1) % comments.length;
                    displayComment(comments[currentIndex]);
                }, delay + 45000); 
                
            } else {
                displayComment('Please refresh the page when you switch to a new video.');
            }
        }

        function displayComment(comment) {
            commentsContent.innerHTML = comment;
        }
        

        startCommentsDisplay();
    }
})();
