## YOUTUBE COMMENT FLOW EXTENSION(Python, HTML, JS)
Extansion link : https://chromewebstore.google.com/detail/youtube-comment-flow/ikcdlckoeebijakefmlielnahhoadoef?hl=tr&utm_source=ext_sidebar
YouTube Comment Flow Extension is a Chrome extension that displays popular comments from
YouTube videos as subtitles on your screen while you watch the videos. This extension continually
shows popular comments related to the video you're watching at the top of the screen, allowing you 
to follow comments without interrupting your viewing experience. The extension is a handy tool for 
users to easily read comments. It is developed using Python, HTML, and JavaScript, and offers a 
straightforward installation process.
## FILE STRUCTURE
![YCW Folder Design](https://github.com/user-attachments/assets/e7669545-fab0-46d6-94f0-c84bd3f53ab1)
## How to Obtain Your API Key
To use the YouTube Comment Flow extension, you will need an API key from the Google API Console. Follow these steps to obtain your API key.
Visit the Google API Console
Click on the dropdown menu at the top of the page next to the Google Cloud logo.
Select "New Project".
Enter a name for your project and click "Create".
In the left sidebar, go to "Library".
Search for "YouTube Data API v3".
Click on it and then click "Enable".
Go to the "Credentials" tab in the left sidebar.
Click on "Create Credentials" and select "API key".
Your API key will be generated and displayed. Click "Copy" to save it.
Click on the "Edit API Key" button.
Set appropriate restrictions to secure your API key.
Click "Save".
Open the extension's settings file.
Replace the placeholder API key with the one you obtained.
## How to Load and Test Your Chrome Extension
Ensure your extension files (including manifest.json, background scripts, content scripts, and any other necessary files) are properly organized in a single directory(my_flask_app).
Open Google Chrome on your computer. Type chrome://extensions in the address bar and press Enter.
At the top right corner of the Extensions page, toggle the switch labeled "Developer mode" to enable it.
Click the "Load unpacked" button.
Navigate to the directory where your extension files are located.
Select the directory and click "Select Folder"
Your extension should now be visible on the Extensions page.
Click on the extension icon in the Chrome toolbar to activate it.
Navigate to a YouTube video to test the extension’s functionality.
If the extension does not work as expected, click the "background page" link next to your extension on the Extensions page to open the Developer Tools for debugging.
Make any necessary changes to your extension files and click the "Reload" button next to your extension on the Extensions page to apply updates.
To remove the extension, click the "Remove" button next to the extension on the Extensions page.
## Usage Instructions
Add the YouTube Comment Flow Extension to your Chrome browser.
Once installed, click on the extension icon to activate it.
Navigate to any YouTube video you want to watch.
Refresh the YouTube video page to see the popular comments appear as subtitles on the screen.
For each new video you open, make sure to refresh the page to update the comments displayed.
