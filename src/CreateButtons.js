import React from 'react';

export function CPButton (props){
	return(
		<button onClick={props.handleClick}>Add Plyer</button>
	)
}
export function CreateGridButtons (props) {
  const buttons = [];
  for( let x = 4; x < 12; x++) {
     buttons.push(
      <button
          className="btn-grid"
          onClick={props.handleClick}
          data-param={x}
       >
       { x+" x "+x+ ' Grid'}
       </button>
    )
  }
  return buttons;
}