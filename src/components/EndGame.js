import React from "react";

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    return (
      <div className="game-over">
        
          <button className="new-game-btn" onClick={this.handleClick}>
Play Again          </button>
        
      </div>
    );
  }
}

export default EndGame;
