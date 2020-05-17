# simple-dash

This is a basic MPEG-DASH server using Express, with Morgan for logging.

For the frontend we're using:

- [videojs-contrib-dash](https://github.com/videojs/videojs-contrib-dash)

- [video.js](https://github.com/videojs/video.js)

- [dash.js](https://github.com/Dash-Industry-Forum/dash.js)

## Instructions

To run the server, first run `npm install` to install all dependencies and then run `npm start` to start the server on port 3000 (modify server.js if you wish to run on a different port).

### Additional Info

To more closely monitor the size of each segment being transferred, I recommend allowing the server to statically server the video file by placing the .mpd and all it's references (.mp4s) into a subdirectory (/public/media/) local to the server. This will allow you to see the size of the partial segments transferred within the log.

This should be useful for demonstration purposes.
