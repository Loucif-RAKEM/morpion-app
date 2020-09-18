import React, { useContext } from "react";
import "./Square.css";
import GameContext from "./GameContext";

function Square({ squareId, squareContent }) {
  const { currentPlayer, updateTable, gameEnd } = useContext(GameContext);

  const handleClick = () => {
    if (squareContent === "" && !gameEnd) {
      updateTable(squareId, currentPlayer);
    }
  };

  return (
    <div
      className={"square" + (squareContent === "o" ? " blue_text" : "")}
      onClick={handleClick}
    >
      {squareContent}
    </div>
  );
}

export default Square;
