import React, { Component } from 'react';
import logo from './logo.png';
import './styles/App.css';
import routes from './routes';
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div>
        <div className="Nav">
          <header className="Nav-header">
            <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
            <h1 className="Nav-title">SHELFIE</h1>
          </header>
        </div>

        { routes }
      </div>
    );
  }
}

export default App;
