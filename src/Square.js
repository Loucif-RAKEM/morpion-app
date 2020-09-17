import React, { useContext, useState } from "react";
import "./Square.css";
import TableContext from "./TableContext";
import GameContext from "./GameContext";

function Square(props) {
  const [squareContent, setSquareContent] = useState(props.value);
  const [squareId] = useState(props.id);

  const { currentPlayer } = useContext(GameContext);
  const { updateTable } = useContext(TableContext);

  const handleClick = () => {
    if (squareContent === "") {
      setSquareContent(currentPlayer);
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
