import React, { useState } from "react";
import "./Game.css";
import Table from "./Table";
import GameContext from "./GameContext";

function Game() {
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
  const [currentPlayer, setCurrentPlayer] = useState("x");
  const [gameEnd, setGameEnd] = useState(false);
  const [winner, setWinner] = useState("");

  const resetTable = () => {
    setSquares([
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
  };
  // ! array update is late by one step
  // TODO correct this bug
  const updateTable = (id, newValue) => {
    const nextSquares = [...squares];
    const index = nextSquares.findIndex((square) => square.id === id);
    nextSquares[index] = { id: id, value: newValue };
    console.log(nextSquares);
    setSquares(nextSquares);

    console.log("---------------");
    console.log(squares);
    // console.log(squares === updatedSquares);
    evaluateGame();
    updateCurrentPlayer();
  };

  const evaluateGame = () => {
    const topRow =
      squares[0].value !== "" &&
      squares[0].value === squares[1].value &&
      squares[0].value === squares[2].value;
    if (topRow) {
      setWinner(squares[0].value);
      setGameEnd(true);
      return;
    }
    const middleRow =
      squares[3].value !== "" &&
      squares[3].value === squares[4].value &&
      squares[4].value === squares[5].value;
    if (middleRow) {
      setWinner(squares[3].value);
      setGameEnd(true);
      return;
    }
    const bottomRow =
      squares[6].value !== "" &&
      squares[6].value === squares[7].value &&
      squares[7].value === squares[8].value;
    if (bottomRow) {
      setWinner(squares[6].value);
      setGameEnd(true);
      return;
    }
    const leftColumn =
      squares[0].value !== "" &&
      squares[0].value === squares[3].value &&
      squares[3].value === squares[6].value;
    if (leftColumn) {
      setWinner(squares[0].value);
      setGameEnd(true);
      return;
    }
    const middleColumn =
      squares[1].value !== "" &&
      squares[1].value === squares[4].value &&
      squares[4].value === squares[7].value;
    if (middleColumn) {
      setWinner(squares[1].value);
      setGameEnd(true);
      return;
    }
    const rightColumn =
      squares[2].value !== "" &&
      squares[2].value === squares[5].value &&
      squares[5].value === squares[8].value;
    if (rightColumn) {
      setWinner(squares[2].value);
      setGameEnd(true);
      return;
    }
    const leftDiagonal =
      squares[0].value !== "" &&
      squares[0].value === squares[4].value &&
      squares[4].value === squares[8].value;
    if (leftDiagonal) {
      setWinner(squares[0].value);
      setGameEnd(true);
      return;
    }
    const rightDiagonal =
      squares[2].value !== "" &&
      squares[2].value === squares[4].value &&
      squares[4].value === squares[6].value;
    if (rightDiagonal) {
      setWinner(squares[2].value);
      setGameEnd(true);
      return;
    }

    // Draw
    if (squares.every((square) => square.value !== "")) {
      setWinner("xo");
      setGameEnd(true);
    }
  };
  const updateCurrentPlayer = () => {
    if (currentPlayer === "x") setCurrentPlayer("o");
    else if (currentPlayer === "o") setCurrentPlayer("x");
  };

  const contextValue = {
    currentPlayer: currentPlayer,
    updateTable: updateTable,
    gameEnd: gameEnd,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <div className="game">
        {gameEnd ? (
          winner === "xo" ? (
            <h2>Game ended with a draw !</h2>
          ) : (
            <h2>
              Winner is :{" "}
              <span className={winner === "o" ? "blue_text" : ""}>
                {winner.toUpperCase()}
              </span>
            </h2>
          )
        ) : (
          <h2>
            Current player :
            <span className={currentPlayer === "o" ? "blue_text" : ""}>
              {currentPlayer.toUpperCase()}
            </span>
          </h2>
        )}
        <Table squares={squares} />
      </div>
    </GameContext.Provider>
  );
}

export default Game;
