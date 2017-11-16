import React, { Component } from 'react';
import {CreateGridButtons} from './helpers.js';

const CreateGrid = function (props){
  var CGButtons = CreateGridButtons(props);
  return (
    <div>
      <p className="App-intro">
        To get started, select grid size.
      </p>
      <div>
        {CGButtons}
        </div>
      <div>
        <button
          className="btn-grid"
          onClick={props.handleClick}
          data-param={''}
        >Clear Grid</button>
      </div>
    </div>
  );
}
export default CreateGrid;