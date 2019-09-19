import React from "react";
import { Tile } from "./../components";

function BoardRow(props) {
  return (
    <div className="board-row">
      <Tile onTurnChange={props.onTurnChange} currentTurn={props.currentTurn} />
      <Tile onTurnChange={props.onTurnChange} currentTurn={props.currentTurn} />
      <Tile onTurnChange={props.onTurnChange} currentTurn={props.currentTurn} />
    </div>
  );
}

export default BoardRow;
