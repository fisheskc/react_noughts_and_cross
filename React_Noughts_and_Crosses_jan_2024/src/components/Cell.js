import classes from './Style.module.css'

import React from 'react'

const Cell = ({ id, clickCell, value }) => {

  return (
    <div
      className={classes.cell}
      key={id}
      data-number={id}
      onClick={clickCell}
    >
      {value}
    </div>
  )
}

export default Cell;