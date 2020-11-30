import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import HomeContext from "./HomeContext";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    border: "2px solid white",
    padding: theme.spacing(2, 4, 3),
    width: "400px",
    textAlign: "center",
  },
}));

function TransitionsModal({ winner, resetGame, setGameEnd }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    handleOpen();
  }, [winner]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setGameEnd(false);
    resetGame();
    setOpen(false);
  };

  const { setShowGame } = React.useContext(HomeContext);

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <img
              src={process.env.PUBLIC_URL + "/icons8-prize-money-48.png"}
              alt="Prize logo"
            />
            {winner === "xo" ? (
              <h2>Game ended in a draw !</h2>
            ) : (
              <h2>
                Winner is ...{" "}
                <span className={winner === "o" ? "green_text" : ""}>
                  {winner.toUpperCase()}
                </span>
              </h2>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "50px",
              }}
              id="transition-modal-description"
            >
              <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: "#263238", color: "white" }}
                onClick={() => {
                  setShowGame(false);
                  handleClose();
                }}
              >
                Go Back to Home
              </Button>
              <Button
                variant="contained"
                size="small"
                style={{ backgroundColor: "#53af50", color: "white" }}
                onClick={handleClose}
              >
                Restart Game
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default TransitionsModal;
