document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.local.get('comments', function(data) {
        const commentsContainer = document.getElementById('comments');
        commentsContainer.innerHTML = ''; 
        if (data.comments && data.comments.length > 0) {
            data.comments.forEach(comment => {
                const div = document.createElement('div');
                div.textContent = comment;
                commentsContainer.appendChild(div);
            });
        } else {
            commentsContainer.innerHTML = '<p>Please refresh the page when you switch to a new video.</p>'; // Buradaki mesajı güncelliyoruz
        }
    });
});



