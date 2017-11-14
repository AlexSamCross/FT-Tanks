import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    //set statess
    this.state = {
        playerCount: 0,
        gridSize: ''
    }
    //setuping your own custom functions
    this.createPlayer = this.createPlayer.bind(this);
    this.createGrid = this.createGrid.bind(this);
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
  createGrid (element) {
    const { param } = element.target.dataset;
    console.log(param);
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
        square.id = 'square'+[1];
        square.className = 'square';
        grid.appendChild(square);
      } 
      this.setState({ gridSize: param });
    }
    else{
      
    }
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
        <p className="App-intro">
          To get started, select grid size.
        </p>
        <button
          className="btn-grid"
          onClick={this.createGrid}
          data-param={3}
        >3x3 Grid</button>
        <button
          className="btn-grid"
          onClick={this.createGrid}
          data-param={4}
        >4x4 Grid</button>
        <button
          className="btn-grid"
          onClick={this.createGrid}
          data-param={5}
        >5x5 Grid</button>
      </div>
    );
  }
}

export default App;

