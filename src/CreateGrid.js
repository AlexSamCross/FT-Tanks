import React, { Component } from 'react';

class CreateGrid extends React.Component {

  constructor (props) {
    super(props);
    //set statess
    this.state = {
        gridSize: ''
    }
    //setuping your own custom functions
    this.constGrid = this.constGrid.bind(this);
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
        square.id = 'square'+[1];
        square.className = 'square';
        grid.appendChild(square);
      } 
      this.setState({ gridSize: param });
    }
    else{
      //else clear other gird
    }
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, select grid size.
        </p>
        <button
          className="btn-grid"
          onClick={this.constGrid}
          data-param={3}
        >3x3 Grid</button>
        <button
          className="btn-grid"
          onClick={this.constGrid}
          data-param={4}
        >4x4 Grid</button>
        <button
          className="btn-grid"
          onClick={this.constGrid}
          data-param={5}
        >5x5 Grid</button>
      </div>
    );
  }
}

export default CreateGrid;