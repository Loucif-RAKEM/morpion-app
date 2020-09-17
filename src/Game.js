import React, { useState } from "react";
import "./Game.css";
import Table from "./Table";
import GameContext from "./GameContext";

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState("x");

  const updateCurrentPlayer = () => {
    if (currentPlayer === "x") setCurrentPlayer("o");
    else if (currentPlayer === "o") setCurrentPlayer("x");
  };

  const contextValue = {
    currentPlayer: currentPlayer,
    updateCurrentPlayer: updateCurrentPlayer,
  };

  return (
    <GameContext.Provider value={contextValue}>
      <div className="game">
        <h2>
          Current player :
          <span className={currentPlayer === "o" ? "blue_text" : ""}>
            {currentPlayer.toUpperCase()}
          </span>
        </h2>
        <Table />
      </div>
    </GameContext.Provider>
  );
}

export default Game;
