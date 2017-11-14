import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBoard from './ScoreBoard';
import CreateGrid from './CreateGrid';

class App extends React.Component {

  constructor (props) {
    super(props);
    //set statess
    this.state = {
        playerCount: 0,
        gridSize: ''
    }
    //setuping your own custom functions
    this.createPlayer = this.createPlayer.bind(this);  }
  createPlayer(element){
    //add player
    var playerCount = this.state.playerCount
    if (playerCount < 4){
      var playerCount = playerCount +1;
      this.setState({ playerCount: playerCount });
    }else alert('Sorry max number of players has now been reached!');
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FT-Tanks</h1>
        </header>
        <button
          className="btn-player"
          onClick={this.createPlayer}
        >Add New Player</button>
        <div>
          <h1>Scores</h1>
          <ScoreBoard/>
          <CreateGrid/>
        </div>
      </div>
    );
  }
}

export default App;

