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
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="help-icon" fill="currentColor" viewBox="0 0 256 256"><path d="M232,120h-8.34a95.07,95.07,0,0,0-8.82-32.9l7.23-4.17a8,8,0,0,0-8-13.86l-7.25,4.19a97,97,0,0,0-24.08-24.08l4.19-7.25a8,8,0,0,0-13.86-8l-4.17,7.23A95.07,95.07,0,0,0,136,32.34V24a8,8,0,0,0-16,0v8.34a95.07,95.07,0,0,0-32.9,8.82l-4.17-7.23a8,8,0,0,0-13.86,8l4.19,7.25A97,97,0,0,0,49.18,73.26l-7.25-4.19a8,8,0,0,0-8,13.86l7.23,4.17A95.07,95.07,0,0,0,32.34,120H24a8,8,0,0,0,0,16h8.34a95.07,95.07,0,0,0,8.82,32.9l-7.23,4.17a8,8,0,0,0,4,14.93,7.92,7.92,0,0,0,4-1.07l7.25-4.19a97,97,0,0,0,24.08,24.08l-4.19,7.25a8,8,0,0,0,13.86,8l4.17-7.23a95.07,95.07,0,0,0,32.9,8.82V232a8,8,0,0,0,16,0v-8.34a95.07,95.07,0,0,0,32.9-8.82l4.17,7.23a8,8,0,0,0,13.86-8l-4.19-7.25a97,97,0,0,0,24.08-24.08l7.25,4.19A8,8,0,0,0,225,184a8,8,0,0,0-2.92-10.93l-7.23-4.17a95.07,95.07,0,0,0,8.82-32.9H232a8,8,0,0,0,0-16ZM72,128A55.91,55.91,0,0,1,93.38,84l25.38,44L93.38,172A55.91,55.91,0,0,1,72,128Zm56,56a55.67,55.67,0,0,1-20.78-4l25.4-44h50.8A56.09,56.09,0,0,1,128,184Zm4.62-64-25.4-44a56,56,0,0,1,76.2,44Z"></path></svg> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" id="help-icon" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"></path></svg>
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings" id="help-icon"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> */}
      {/* <svg onClick={goTo("Explainer")} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle" id="help-icon"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> */}
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

// window.onload = () => {
//   let camera_button = document.querySelector("#start-camera");
//   let video = document.querySelector("#video");
//   let start_button = document.querySelector("#start-record");
//   let stop_button = document.querySelector("#stop-record");
//   let download_link = document.querySelector("#download-video");

//   let camera_stream = null;
//   let media_recorder = null;
//   let blobs_recorded = [];

//   camera_button.addEventListener('click', async function() {
//       camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//     video.srcObject = camera_stream;
//   });

//   start_button.addEventListener('click', function() {
//       // set MIME type of recording as video/webm
//       media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' });

//       // event : new recorded video blob available 
//       media_recorder.addEventListener('dataavailable', function(e) {
//       blobs_recorded.push(e.data);
//       });

//       // event : recording stopped & all blobs sent
//       media_recorder.addEventListener('stop', function() {
//         // create local object URL from the recorded video blobs
//         let video_local = URL.createObjectURL(new Blob(blobs_recorded, { type: 'video/webm' }));
//         download_link.href = video_local;
//       });

//       // start recording with each recorded blob having 1 second video
//       media_recorder.start(1000);
//   });

//   stop_button.addEventListener('click', function() {
//     media_recorder.stop(); 
//   });
// };

class HomePage extends Component {
  render() {
    return (
        <>
          <div className="Header">
            {/* <div className="logo-button">
              <div className="nav-left">
                <a id="main-title-text" href="/"> 
                  <span id="logo" role="img" aria-label="Nerd Emoji">🤓</span> 
                    Interview<br/>
                    Tutor 
                </a>
              </div>
            </div>*/}
            {/* **v0:** First port with better usability
            - **Keep Ups** &rarr; Carry over uncompleted tasks
            - **List Groups** &rarr; Make sublists for related tasks
            - **Task Intervals** &rarr; Place a timebox around a task
            - **Keep Momentum** &rarr; Hide completed tasks

            **v1:** Visual & UX considerations 
            - **It's Alive!** &rarr; Snazzy new animations
            - **Paint it Black** &rarr; Better color selection
            - **Enhance. ENHANCE.** &rarr; Multiple display widths
            - **Persistent Focuses** &rarr; Idea bait for the start of the day */}
             <div className="cta-text"></div> 
             {/* <div className="pointer">
                <HelpIcon />
                <span id="door" role="img" aria-label="Door Emoji">🪴</span> 
             </div> */}
             {/* <div className="top-right">
              <GoIcon />
                <HelpIcon />
             </div> */}
          </div>
      
          {/* <div className="CameraWindow" id="start">
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
            </div> 
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
        </div> */}
      </>
    );
  }
}

export default HomePage;
