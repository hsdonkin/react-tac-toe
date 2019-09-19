import React from "react";
import { BoardRow } from "./";

function TicTacToeBoard(props) {
  return (
    <React.Fragment>
      <BoardRow
        onTurnChange={props.onTurnChange}
        currentTurn={props.currentTurn}
      />
      <BoardRow
        onTurnChange={props.onTurnChange}
        currentTurn={props.currentTurn}
      />
      <BoardRow
        onTurnChange={props.onTurnChange}
        currentTurn={props.currentTurn}
      />
    </React.Fragment>
  );
}

export default TicTacToeBoard;
