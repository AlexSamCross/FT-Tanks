import React, { Component } from 'react';

export function CreateGridButtons (props) {
  const buttons = [];
  for( let i = 4; i < 12; i++) {
     buttons.push(
      <button
          className="btn-grid"
          onClick={props.handleClick}
          data-param={i}
       >
       { i+" x "+i+ ' Grid'}
       </button>
    )
  }
  return buttons;
}
