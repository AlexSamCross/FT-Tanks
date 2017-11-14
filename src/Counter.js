import React from 'react';

class Counter extends React.Component {
  constructor(){
    super();
    this.state = {
      count: 0
   };
}

plusOne() {
  let newCount = this.state.count + 1;
  this.setState({count: newCount });
}
  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.plusOne.bind(this)}>+1</button>
      </div>
    );
  }
}

export default Counter;
