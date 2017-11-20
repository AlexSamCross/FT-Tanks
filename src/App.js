import React, { Component } from 'react';
import Notifications, {notify} from 'react-notify-toast';
import logo from './logo.svg';
import './App.css';
import {CPButton, RPButton} from './CreateButtons.js';
import {scoreBoard } from './ScoreBoard.js';
import CreateGrid from './CreateGrid';

class App extends Component { 

  constructor (props) {
    super(props);
    //set statess
    this.state = {
        playerCount: 0,
        player: [],
        gridSize: ''
    }
    //setuping your own custom functions
    this.createPlayer = this.createPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
    this.constGrid = this.constGrid.bind(this);
  }
  createPlayer(element){
    var playerCount = this.state.playerCount +1;
    notify.show('Player ' + playerCount +' Added');

    //update states
    this.setState({
      player : this.state.player.concat({
        playName : 'player'+ playerCount,
        PlayerID : playerCount,
        Score: 0
      })
    })
    this.setState({playerCount:playerCount});

    //update scoreboard
    setTimeout(
      function(){
        scoreBoard(this.state.playerCount, this.state.player);
      }.bind(this), 300)
  }
  removePlayer(element){
    var playerCount = this.state.playerCount;
    if (playerCount !== 0 ){
      notify.show('Player ' + playerCount +' Removed');
      playerCount = playerCount -1;
      //remove laste array entry. 
      this.setState({playerCount:playerCount});
    }
    else{
      notify.show('Unable to remove another Player');
    }
  }
  //methods
  constGrid (element) {
    const { param } = element.target.dataset;
    if (param !== ''){
      //if no gridSize state excists then create grid.
      var grid = document.createElement('div');
      grid.id = 'grid';
      grid.className = 'grid';

      var gridWidth = (50 * param),
      gridHeight = (50 * param);
      grid.style.width = gridWidth + "px";
      grid.style.height = gridHeight + "px";
      document.body.appendChild(grid);

      for (var i=0; i < (param*param); i++) {
        var square = document.createElement('div');
        square.id = 'square'+[i];
        square.className = 'square';
        grid.appendChild(square);
      } 
      this.setState({ gridSize: param });
    }
    else{
      //else clear other gird
      document.getElementById("grid").remove();   
      this.setState({ gridSize: param });
    }
  }
  render() {
    return (
      <div id="App" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FT-Tanks</h1>
        </header>
        <h1>Create your game.</h1>
         <Notifications />
        <CPButton handleClick={this.createPlayer}/>
        <RPButton handleClick={this.removePlayer}/>
        <div id="grid"/>
        <CreateGrid handleClick={this.constGrid}/>
      </div>
    );
  }
}

export default App;

