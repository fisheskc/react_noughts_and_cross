import React from 'react'


const GamePlay = ({ resetGamePlay }) => {
  return (
    <div className="state-title">
      <button onClick={resetGamePlay}>Reset Game</button>
    </div>
  )
}

export default GamePlay;