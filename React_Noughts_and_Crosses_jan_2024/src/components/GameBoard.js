import React, { Fragment } from 'react'
import Cell from './Cell';

import classes from './Style.module.css'

const GameBoard = ({ cells, setCells, player, setPlayer, inPlay }) => {

  function clickCell(e) {
    let cellNumber = e.target.dataset.number

    if (cells[cellNumber - 1].value !== "" || !inPlay) { 
      return 
    }

    let newCells = [...cells]
    newCells[cellNumber - 1].value = player
    setCells(newCells)

    setPlayer((player === 'X') ? 'O' : 'X')
  }

  return (
    <Fragment>
      <div className={classes.container}>
        {cells.map((cell) =>
          <Cell
            key={cell.id}
            id={cell.id}
            clickCell={clickCell}
            value={cell.value}
          />
        )}
      </div>
    </Fragment>
  )
}
export default GameBoard;








