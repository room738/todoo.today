import './App.css';
import { Component } from 'inferno';

import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
