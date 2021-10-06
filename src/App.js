import React from 'react'
import './App.css';

const BOARD_SIZE = 10;
const DEFAULT_CELLS_VALUE = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0));
const AVAILABLE_MOVES =['ArrowDown', 'ArrowUp', 'ArrowRighr', 'ArrowLeft'];
const SPEED = 500

const App = () => {

    const [direction, setDirection] = React.useState(AVAILABLE_MOVES[0]);
    const [snake, setSnake] = React.useState([[1, 1]])

    const handleKeyDown = (event) => {
      const index = AVAILABLE_MOVES.indexOf(event.key)
      if ( index > -1) {
        setDirection(AVAILABLE_MOVES[index])
      }
    }

    React.useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
    })

    return (
        <div>
          {DEFAULT_CELLS_VALUE.map((row, indexR) => (
            <div key={indexR} className='row'>
              {row.map((cell, indexC) => (
                let type = snake.some(elem => elem[0] === indexR && elem[1] === indexC) && 'snake';
                return (<div className={`cell ${type}`}/>)
              ))}
            </div>
          ))}
            
            <div className='cell snake'/>
            <div className='cell food'/>
            <div className={`arrow down ${direction === 'ArrowDown' ? 'selected' : ''}`}/>
            <div className={`arrow up ${direction === 'ArrowUp' ? 'selected' : ''}`}/>
            <div className={`arrow left ${direction === 'ArrowLeft' ? 'selected' : ''}`}/>
            <div className={`arrow right ${direction === 'ArrowRight' ? 'selected' : ''}`}/>
        </div>
    );
}


export default App;
