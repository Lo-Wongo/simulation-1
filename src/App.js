import React, { Component } from 'react';
// import logo from './logo.png';
// import './styles/App.css';
import routes from './routes';
import Header from './components/Header/Header';


class App extends Component {
  render() {
    return (
      <div>

        <Header/>
      
        { routes }

      </div>
    );
  }
}

export default App;
