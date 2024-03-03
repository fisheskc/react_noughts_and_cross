import React, { Fragment, useEffect, useMemo, useState } from 'react'
import getWinner from './winChecker'
import GameBoard from './GameBoard';
import GamePlay from './GamePlay';
import getBlankCells from './cellsgrid';

const Players = () => {
  const [cells, setCells] = useState([...getBlankCells()]);
  const [player, setPlayer] = useState("X");
  const [winResult, setWinResult] = useState();
  const [pl1Score, setPl1Score] = useState(0);
  const [pl2Score, setPl2Score] = useState(0);

  useEffect(() => {
    setWinResult(getWinner(cells))
  }, [cells])

  const currentScores = useMemo(() => 
    `X: ${pl1Score} - ${pl2Score} :O`
  , [pl1Score, pl2Score])
  
  const currentStatus = useMemo((pl) => {
    if (!winResult) {
      return <p>To play</p>
    }

    if (["X", "O"].includes(player)) {
      if (winResult === "X") {
        setPl1Score(pl1Score + 1)
      }
      else {
        setPl2Score(pl2Score + 1)
      }
      return <p>Player {winResult} is a winner!</p>
    }

    return <p>It is a draw!</p>
  }, [player, winResult])

  return (
    <Fragment>
      <div>
        <p>Hello from players</p>
        <p>{currentScores}</p>
        <p>{!winResult
          ? `Game in play`
          : `Game not in play`
        }</p>
        <GameBoard
          cells={cells}
          setCells={setCells}
          player={player}
          setPlayer={setPlayer}
          inPlay={!winResult}
        />
        {currentStatus}
      </div>
      <div>
        <GamePlay
          resetGamePlay={() => setCells([...getBlankCells()])}
        />
      </div>

    </Fragment>
  )
}

export default Players;