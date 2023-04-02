import '../../App.css';
import { Component } from 'inferno';
// import { WebcamWindow } from './WebcamWindow/'

// import Webcam from "react-webcam"; port this
// https://www.npmjs.com/package/react-webcam?activeTab=explore

const ChevronIcon = () => (
  <a href="#start">
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down" id="chevron"><polyline points="6 9 12 15 18 9"/></svg>
  </a>
);

const HelpIcon = () => (
  // <div>
  //     <svg onClick={goTo("Explainer")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle" id="help-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
  //     <span id="help-text">more</span>
  // </div>
  // <svg onClick={goTo("Explainer")} id="help-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#142c13" viewBox="0 0 256 256"><path d="M140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180ZM128,72c-22.06,0-40,16.15-40,36v4a8,8,0,0,0,16,0v-4c0-11,10.77-20,24-20s24,9,24,20-10.77,20-24,20a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-.72c18.24-3.35,32-17.9,32-35.28C168,88.15,150.06,72,128,72Zm104,56A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path></svg>
  <a href="#help">
      <svg onClick={goTo("Explainer")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle" id="help-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
  </a>
);

// const GoIcon = () => (
//   // <div>
//   //     <span id="go-text">go!</span>
//   //     <svg onClick={goTo("CameraWindow")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle" id="go-icon"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
//   // </div>
//   // <svg onClick={goTo("CameraWindow")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play-circle" id="go-icon"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
// <svg onClick={goTo("CameraWindow")} id="go-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#142c13" viewBox="0 0 256 256"><path d="M96,104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H104A8,8,0,0,1,96,104Zm8,40h64a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Zm128,48a32,32,0,0,1-32,32H88a32,32,0,0,1-32-32V64a16,16,0,0,0-32,0c0,5.74,4.83,9.62,4.88,9.66h0A8,8,0,0,1,24,88a7.89,7.89,0,0,1-4.79-1.61h0C18.05,85.54,8,77.61,8,64A32,32,0,0,1,40,32H176a32,32,0,0,1,32,32V168h8a8,8,0,0,1,4.8,1.6C222,170.46,232,178.39,232,192ZM96.26,173.48A8.07,8.07,0,0,1,104,168h88V64a16,16,0,0,0-16-16H67.69A31.71,31.71,0,0,1,72,64V192a16,16,0,0,0,32,0c0-5.74-4.83-9.62-4.88-9.66A7.82,7.82,0,0,1,96.26,173.48ZM216,192a12.58,12.58,0,0,0-3.23-8h-94a26.92,26.92,0,0,1,1.21,8,31.82,31.82,0,0,1-4.29,16H200A16,16,0,0,0,216,192Z"></path></svg>);

const goTo = (id) => {
  // window.addEventListener('load', (id) => {
  //   const target = document.getElementsByClassName(id)[0];
  //   target.scrollIntoView();
  // })
}

window.onload = () => {
  let camera_button = document.querySelector("#start-camera");
  let video = document.querySelector("#video");
  let start_button = document.querySelector("#start-record");
  let stop_button = document.querySelector("#stop-record");
  let download_link = document.querySelector("#download-video");

  let camera_stream = null;
  let media_recorder = null;
  let blobs_recorded = [];

  camera_button.addEventListener('click', async function() {
      camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    video.srcObject = camera_stream;
  });

  start_button.addEventListener('click', function() {
      // set MIME type of recording as video/webm
      media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });

      // event : new recorded video blob available 
      media_recorder.addEventListener('dataavailable', function(e) {
      blobs_recorded.push(e.data);
      });

      // event : recording stopped & all blobs sent
      media_recorder.addEventListener('stop', function() {
        // create local object URL from the recorded video blobs
        let video_local = URL.createObjectURL(new Blob(blobs_recorded, { type: 'video/webm' }));
        download_link.href = video_local;
      });

      // start recording with each recorded blob having 1 second video
      media_recorder.start(1000);
  });

  stop_button.addEventListener('click', function() {
    media_recorder.stop(); 
  });
};

class HomePage extends Component {
  render() {
    return (
        <>
          <div className="Header">
            <div className="logo-button">
              <div className="nav-left">
                <a id="main-title-text" href="/"> 
                  <span id="logo" role="img" aria-label="Nerd Emoji">🤓</span> 
                    Interview<br/>
                    Tutor 
                </a>
              </div>
            </div>
             <div className="cta-text">Defeat pre-interview jitters with practice.</div>
             <div className="pointer">
                <ChevronIcon />
             </div>
             <div className="top-right">
              {/* <GoIcon /> */}
                <HelpIcon />
             </div>
          </div>

          <div className="CameraWindow" id="start">
            <button id="start-camera">Start Camera</button>
            <video id="video" height="2920px" width="100%" autoplay></video>
            <button id="start-record">Start Recording</button>
            <button id="stop-record">Stop Recording</button>
            <a href="google.com" id="download-video" download="test.webm">Download Video</a>
            {/* <div className="CameraWindowGridContainer">
              <div class="camera-title"> 
                "Would you mind introducing yourself?"
              </div>

              <div class="camera-cam">
                <WebcamWindow/>
              </div>

              <div className="camera-scorecard">
                <div className="top-card"> 
                  <div class="scorecard-tile-title"> Speaking</div>
                  <div class="scorecard-tile-subtitle"> 
                    A bunch of detail about what this section means, what it feels like, what it yearns to be in the dead of night.
                  </div>
                  <div class="scorecard-tile-arrow"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
                  </div> 
                </div>
                <div className="mid-card"> 
                  <div class="scorecard-tile-title">Posture</div>
                  <div class="scorecard-tile-subtitle"> 
                    A bunch of detail about what this section means, what it feels like, what it yearns to be in the dead of night.
                  </div>
                  <div class="scorecard-tile-arrow"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
                  </div> 
                </div>
                <div class="bottom-card"> 
                  <div class="scorecard-tile-title">Equipment</div>
                  <div class="scorecard-tile-subtitle"> 
                    A bunch of detail about what this section means, what it feels like, what it yearns to be in the dead of night.
                  </div>
                  <div class="scorecard-tile-arrow"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"/></svg>
                  </div> 
                </div>
              </div>
            </div> */}
          </div>

          <div className="Explainer" id="help"> 
            Quickly assess the quality of your <br/><span>speaking, posture, and environment</span> <br/> all inside your browser.
          </div>

          <div className="Content">
            <div class="content1"> Speaking </div>
            <div class="content2"> Posture </div>
            <div class="content3"> Environment </div>
            <div class="content4"> Free </div>
            <div class="content5"> Private </div>
            <div class="content6"> In Browser </div> 
          </div>

          <div className="Footer">
            <div className="inner-footer">
              <a href="/privacy" target="_blank">
                privacy 
              </a>
              <a href="https://www.uncouth.website/" target="_blank" id="footer-link">
                <span id="door" role="img" aria-label="Door Emoji">🪴</span> 
              </a>
              <a href="/contact" target="_blank">
                contact
              </a>
            </div>
        </div>
      </>
    );
  }
}

export default HomePage;
