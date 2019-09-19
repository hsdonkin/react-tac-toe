import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { TicTacToeBoard } from "./containers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gameCompleted: false, turn: "X" };
  }

  handleTurnChange = () => {
    if (this.state.turn === "X") {
      this.setState({ gameCompleted: this.state.gameCompleted, turn: "O" });
      console.log(this.state);
    } else if (this.state.turn === "O") {
      this.setState({ gameCompleted: this.state.gameCompleted, turn: "X" });
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <h1>App is working</h1>
        <TicTacToeBoard
          onTurnChange={this.handleTurnChange}
          currentTurn={this.state.turn}
        />
      </div>
    );
  }
}

export default App;
