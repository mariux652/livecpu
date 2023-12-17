const fs = require('fs');
const { exec } = require('child_process');

let loop, streamKey, fileName, runCode;

function readConfig(callback) {
  fs.readFile('config.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading config file:', err);
      callback(err);
      return;
    }

    try {
      const config = JSON.parse(data);
      callback(null, config);
    } catch (parseError) {
      console.error('Error parsing config file:', parseError);
      callback(parseError);
    }
  });
}

// Use the readConfig function to get the values
readConfig((error, config) => {
  if (error) {
    // Handle error
    console.error('Error reading config:', error);
    return;
  }

  // Assign values to global variables
  loop = config.loop;
  streamKey = config.stream_key;
  fileName = config.file_name;

  // Use the variables here or in any other part of your code
  console.log(`Loop: ${loop}`);
  console.log(`Stream Key: ${streamKey}`);
  console.log(`File Name: ${fileName}`);

  if (loop === true) {
    console.log(fileName);
    runCode = `ffmpeg -re -stream_loop -1 -i ${fileName} -i https://i.imgur.com/J9lh9xx.png -filter_complex "[0:v][1:v]overlay=W-w-10:H-h-10:format=auto,format=yuv420p" -c:v libx264 -preset superfast -tune fastdecode -maxrate 500k -bufsize 1000k -g 30 -c:a aac -b:a 64k -ac 2 -ar 22050 -f flv rtmp://a.rtmp.youtube.com/live2/${streamKey}
`;
  } else {
    console.log('Loop is false');
    runCode = `ffmpeg -re -i "${fileName}" -re -i https://cdn.glitch.me/117f23c9-625a-4516-90bb-6113a0c01d08/1217.mp4 -filter_complex "[0:v]scale=854:480:force_original_aspect_ratio=decrease,pad=854:480:-1:-1,setsar=1[v0];[1:v]scale=854:480:force_original_aspect_ratio=decrease,pad=854:480:-1:-1,setsar=1[v1];[v0][0:a][v1][1:a]concat=n=2:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]" -c:v libx264 -preset superfast -tune fastdecode -maxrate 500k -bufsize 1000k -pix_fmt yuv420p -g 30 -c:a aac -b:a 64k -ac 2 -ar 22050 -f flv "rtmp://a.rtmp.youtube.com/live2/${streamKey}"`

    
  }

  // Run the ffmpeg command or default command based on loop
  const stream = exec(runCode, function(err, stdout, stderr) {
    if (err) {
      console.log('Error:', err);
    }
    console.log(stdout);
  });
});
