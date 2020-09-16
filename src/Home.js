import React from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";

class Home extends React.Component {
  state = {
    showInstr: false,
  };
  showInstructions = () => {
    this.setState({ showInstr: !this.state.showInstr });
  };

  render() {
    return (
      <div className="flex_container">
        <div className="home_text">
          <h1 className="title">
            <span>Tic</span> <span className="blue_text">Tac</span>{" "}
            <span>Toe</span>
          </h1>
          <p>
            Press the{" "}
            <Button variant="contained" size="small" color="primary">
              Play
            </Button>{" "}
            button to start the game. Or simply click the left button for
            instructions.
          </p>

          {this.state.showInstr ? (
            <div className="instructions">
              <ul>
                <li>Play occurs on a 3 by 3 grid of 9 empty squares.</li>
                <li>
                  Two players alternate marking empty squares, the first player
                  marking Xs and the second player marking Os.
                </li>
                <li>
                  If one player places three of the same marks in a row, that
                  player wins.
                </li>
                <li>
                  If the spaces are all filled and there is no winner, the game
                  ends in a draw.
                </li>
              </ul>
            </div>
          ) : null}
        </div>

        <div className="home_buttons">
          <Button
            variant="contained"
            color="default"
            onClick={this.showInstructions}
          >
            {this.state.showInstr ? "hide instructions" : "Instructions"}
          </Button>

          <Button variant="contained" color="primary" id="playButton">
            Play
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;
