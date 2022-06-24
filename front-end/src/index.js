import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './Components/Board';
import './index.css';

class Game extends React.Component {
  state = {
    height: 10,
    width: 10,
    mines: 10
  };
  render() {
    const { height, width, mines } = this.state;
    return (
      <div>
        <h1 className='header'>Minesweeper</h1>
        <div className='button-container'>
        </div>
      <div className="game">
        <Board height={height} width={width} mines={mines} />
      </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

