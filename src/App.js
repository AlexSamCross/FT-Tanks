import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScoreBoard from './ScoreBoard';
import CreateGrid from './CreateGrid';
import CPButton from './CreatePlayerButton';

class App extends React.Component {

  constructor (props) {
    super(props);
    //set statess
    this.state = {
        playerCount: 0,
        gridSize: ''
    }
    //setuping your own custom functions
    this.createPlayer = this.createPlayer.bind(this);
    this.constGrid = this.constGrid.bind(this);
  }
  createPlayer(element){
    //add player
    var playerCount = this.state.playerCount
    if (playerCount < 4){
      var playerCount = playerCount +1;
      this.setState({ playerCount: playerCount });
    }else alert('Sorry max number of players has now been reached!');
    
  }
  //methods
  constGrid (element) {
    const { param } = element.target.dataset;
    //console.log(param);
    //clear any grids if one excits
    if (!this.state.gridSize){
      //create grid using value passed in. 4x4
      //gridwidth must be width of square (50px) x value
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FT-Tanks</h1>
        </header>
        <CPButton handleClick={this.createPlayer}/>
        <div>
          <h1>ScoreBoard link removed.</h1>
          <h1>Create your game.</h1>
          <CreateGrid handleClick={this.constGrid}/>
        </div>
      </div>
    );
  }
}

export default App;

