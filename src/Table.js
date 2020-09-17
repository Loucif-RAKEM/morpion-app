import React, { useContext, useState } from "react";
import Square from "./Square";
import "./Table.css";
import TableContext from "./TableContext";
import GameContext from "./GameContext";

function Table() {
  const [squares, setSquares] = useState([
    { id: 0, value: "" },
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
    { id: 4, value: "" },
    { id: 5, value: "" },
    { id: 6, value: "" },
    { id: 7, value: "" },
    { id: 8, value: "" },
  ]);

  const { updateCurrentPlayer } = useContext(GameContext);

  const resetTable = () => {
    const updatedSquares = [
      { id: 0, value: "" },
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
      { id: 5, value: "" },
      { id: 6, value: "" },
      { id: 7, value: "" },
      { id: 8, value: "" },
    ];
    setSquares({ squares: updatedSquares });
  };

  const updateTable = (id, newValue) => {
    const updatedSquares = squares.slice();
    const index = updatedSquares.findIndex((square) => square.id === id);
    updatedSquares.splice(index, 1, { id: id, value: newValue });
    setSquares(updatedSquares);
    updateCurrentPlayer();
    console.log(squares);
  };

  const contextValue = {
    resetTable: resetTable,
    updateTable: updateTable,
  };
  return (
    <TableContext.Provider value={contextValue}>
      <div className="table">
        {squares.map((square) => (
          <Square key={square.id} id={square.id} value={square.value} />
        ))}
      </div>
    </TableContext.Provider>
  );
}

export default Table;
