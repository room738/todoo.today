import '../../App.css';
import { Component } from 'inferno';

class NavBar extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav-left">
          <a id="main-title-text" href="/"> <span role="img" aria-label="Nerd Emoji">🤓</span> Interview<br/>Tutor </a>
        </div>
        {/* <div className="nav-right">
          <div class="button1"> 
            <span id="emoji-button" role="img" aria-label="Nerd Emoji">
              ℹ️
            </span>
          </div>
          <div class="button2"> 
            <span id="emoji-button" role="img" aria-label="Nerd Emoji">
              🤔
            </span>
          </div>
          <div class="button3"> 
            <span id="emoji-button" role="img" aria-label="Nerd Emoji">
              👀
            </span>  
          </div>
          <div class="button4"> 
            <span id="emoji-button" role="img" aria-label="Nerd Emoji">
              ⚙️
            </span> 
          </div>
        </div>  */}
        {/* <div className="nav-middle"></div>
        <div className="nav-right">
          <a href="/settings"> settings</a> 
        </div> */}
      </div>
    );
  }
}

export default NavBar;
