import React from "react";

export default React.createContext({
  currentPlayer: "x",
  updateTable: (id, newValue) => {},
  gameEnd: false,
});
