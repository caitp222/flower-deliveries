import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./stylesheets/App.css";
import Deliverables from './components/deliverables';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Deliverables />
      </div>
    );
  }
}

export default hot(module)(App);
