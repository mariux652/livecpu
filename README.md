<center><img src="https://cdn.glitch.global/117f23c9-625a-4516-90bb-6113a0c01d08/CPU.png" style="height: 150px"><br>
Easily live stream looped videos or single videos to YouTube for free.
 
[![Static Badge](https://img.shields.io/badge/Import-Replit-%23F26207?style=for-the-badge&logo=replit&logoColor=white)](https://replit.com/github)
 [![Static Badge](https://img.shields.io/badge/Remix-Glitch-%233333FF?style=for-the-badge&logo=glitch&logoColor=white)](https://glitch.com/edit/#!/import/git?url=https://github.com/cmdwm/livecpu) [![Static Badge](https://img.shields.io/badge/Fork-Github-%23181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cmdwm/livecpu/fork)
</center>
<hr>
<center>
With LiveCPU, you can <b>create a 24/7 loop stream</b> from a video (for as long as your server is alive), or <b>play a single video</b> then automatically end stream when it's done.
</center>

<h2>Getting started</h2>
First you'll need to clone this repository into your preferred IDE, and get the server running. 

1) <b>Upload a video</b> you'd like to loop/play as <code>input.mp4</code> or try it out with the sample video.

2) <b>Edit your config.json file.</b> The <code>loop</code> variable is essentially asking if you are looping a video (<code>true</code>) or playing it once (<code>false</code>).  You can find your <code>stream_key</code> on <a href="https://youtube.com/live_dashboard">youtube.com/live_dashboard</a> after creating your live event. The <code>file_name</code> variable is the uploaded file path from step one.
  
3) <b>Run the project.</b> You can do this many ways, but universally just type <code>node .</code> into the console. If you recieve any errors, your stream key is probably wrong or the video file path does not exist. 

https://github.com/cmdwm/livecpu/assets/35583237/8f21ee2c-e226-40db-9ae2-f563f6fb2ef9


<h2>Debugging</h2>

- <b>VIDEO QUALITY ISSUES (Buffering):</b> Your stream is sent to YouTube with low settings, as most servers don't have the power for a smooth, high quality stream — this is our way of handling buffering.
  - If you still experience buffering, your server does not have enough power to run even the worst stream possible, so you should probably upgrade it.


- <b>"CANNOT READ UNDEFINED" (Shell Error):</b> If you experience this error while trying to start your stream, it probably means you messed something up in the formatting of <code>config.json</code>. See this repository's config.json file for an example.

With that being said, please do not open issues for either of the above problems unless the stream is literally not sent to YouTube's RMTP server at all and you see it's not being ingested on the live dashboard. We tested this with a cheap ass server and it worked fine.
