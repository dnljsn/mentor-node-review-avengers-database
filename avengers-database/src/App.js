import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      avengers: []
    }
  }

  componentDidMount(){
    axios.get("/api/avengers")
      .then(res => {
        console.log(res.data)
        this.setState({
          avengers: res.data
        })
      })
  }

  render() {
    let avengers = this.state.avengers.map((val, i) => {
      return <h3 key={i}>Name: {val.name}</h3>
    })
    return (
      <div className="App">
        <h1>Avengers</h1>
        {avengers}
      </div>
    );
  }
}

export default App;
