/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import React, { Component } from 'react';
import Menu from './components/MenuComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { render } from 'react-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Menu dishes = {this.state.dishes}/>
        <FooterComponent />
      </div>
    );
  }

}

export default App;
