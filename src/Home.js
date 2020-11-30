import React, { useState } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Game from "./Game";
import HomeContext from "./HomeContext";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import Footer from "./Footer";

function Home() {
  const [showGame, setShowGame] = useState(false);

  const startGame = () => setShowGame(true);

  const contextValue = { setShowGame: setShowGame };

  return showGame ? (
    <HomeContext.Provider value={contextValue}>
      <Game />
      <Footer />
    </HomeContext.Provider>
  ) : (
    <div className="flex_container">
      <div className="home_text">
        <img
          className="logo animate__animated animate__flipInX"
          src={process.env.PUBLIC_URL + "/tic-tac-toe-logo.png"}
          alt="Tic Tac Toe Logo"
        />
        <p>
          Press the{" "}
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#53af50",
              color: "white",
              fontSize: "0.7rem",
            }}
            endIcon={<SportsEsportsIcon />}
          >
            start game
          </Button>{" "}
          button to start the game. You may also check out the game's
          instructions below.
        </p>

        <div className="instructions">
          <ul>
            <li>Play occurs on a 3 by 3 grid of 9 empty squares.</li>
            <li>
              Two players alternate marking empty squares, the first player
              marking Xs and the second player marking Os.
            </li>
            <li>
              If one player places three of the same marks in a row, that player
              wins.
            </li>
            <li>
              If the spaces are all filled and there is no winner, the game ends
              in a draw.
            </li>
          </ul>
        </div>
      </div>

      <div className="home_buttons">
        <Button
          variant="contained"
          id="playButton"
          endIcon={<SportsEsportsIcon />}
          onClick={startGame}
        >
          start game
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
