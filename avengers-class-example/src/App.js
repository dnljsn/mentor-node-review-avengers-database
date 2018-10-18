import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      avengers: []
    }
  }

  componentDidMount(){
    axios.get("/api/avengersassemble")
      .then(response => {
        this.setState({
          avengers: response.data
        })
      })
  }

  render() {
    console.log(this.state.avengers)
    return (
      <div className="App">
        <h1>Avengers</h1>
      </div>
    );
  }
}

export default App;
