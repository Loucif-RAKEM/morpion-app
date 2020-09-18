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
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
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
            {winner === "xo" ? (
              <h2>Game ended with a draw !</h2>
            ) : (
              <h2>
                Winner is :{" "}
                <span className={winner === "o" ? "blue_text" : ""}>
                  {winner.toUpperCase()}
                </span>
              </h2>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "15px",
              }}
              id="transition-modal-description"
            >
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                onClick={setShowGame(false)}
              >
                Go to Home page
              </Button>
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={handleClose}
              >
                Restart
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default TransitionsModal;
