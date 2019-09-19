import React from "react";

// unicode for circle "\u25CE"
class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marker: String.fromCharCode(160),
      selected: false,
      style: { display: "none" }
    };
  }

  handleClick = () => {
    if (this.state.selected === false) {
      let marker;
      if (this.props.currentTurn === "X") {
        // logic for marker = X
        marker = "\u2716";
      } else if (this.props.currentTurn === "O") {
        // logic for marker = O
        marker = "O";
      }
      this.setState({
        marker: marker,
        selected: true
      });
      this.props.onTurnChange();
    }
  };

  render() {
    return (
      <div className="tile" onClick={this.handleClick}>
        <div className="marker">
          <h3>{this.state.marker}</h3>
        </div>
      </div>
    );
  }
}

export default Tile;
