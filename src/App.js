// import logo from './logo.svg';
import React, { Component } from 'react';
import Main from './components/MainComponent';
// import Menu from './components/MenuComponent';
import './App.css';
// import { DISHES } from './shared/dishes';
// import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>      
      </BrowserRouter>
    );
  }

}

export default App;
