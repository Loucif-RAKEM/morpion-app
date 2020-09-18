import React from "react";
import Square from "./Square";
import "./Table.css";

function Table({ squares }) {
  return (
    <div className="table">
      {squares.map((square) => (
        <Square
          key={square.id}
          squareId={square.id}
          squareContent={square.value}
        />
      ))}
    </div>
  );
}

export default Table;
