import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import GameBoard from "./components/GameBoard";
import Banner from "./components/Banner";
import { GAME_STATUS } from "./constants";

const useStyles = createUseStyles({
  header: {
    textAlign: "center"
  },
  footer: {
    textAlign: "center"
  }
});

const CardMatch = () => {
  const [gameStatus, setGameStatus] = useState(GAME_STATUS.CREATING);
  const classes = useStyles();

  const gameFinished = () => {
    setGameStatus(GAME_STATUS.FINISHED);
  };

  const resetGame = () => {
    setGameStatus(GAME_STATUS.RESETTING);
  };

  const setGameToInProgress = () => {
    setGameStatus(GAME_STATUS.IN_PROGRESS);
  };

  return (
    <div>
      <header className={classes.header}>
        <h1>카드를 클릭하고 짝을 맞춰주세요!</h1>
      </header>
      <div>
        <GameBoard
          gameStatus={gameStatus}
          handleStart={setGameToInProgress}
          handleFinish={gameFinished}
        />
        {gameStatus === GAME_STATUS.FINISHED && (
          <Banner handleClick={resetGame} />
        )}
      </div>
    </div>
  );
};
export default CardMatch;