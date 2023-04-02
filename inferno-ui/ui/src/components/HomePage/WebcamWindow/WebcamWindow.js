import { Component } from 'inferno';

// import checks to run

export default class WebcamWindow extends Component {
  render() {
    return (
        <div>Hi</div>
    );
  }
}

// check perms, init listeners, spawn video
// record capture and chunk the parts of the video
// run a series of checks on the video file to return a score
// bubble up the scores and display in the UI