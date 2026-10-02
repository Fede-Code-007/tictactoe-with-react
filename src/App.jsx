import { Board } from './components/Board.jsx'
import { Turns } from './components/Turns.jsx'
import { WinnerModal } from './components/WinnerModal.jsx'
import { useGame } from './hooks/useGame.js'
import './App.css'


export function App() { 
  const { board, turn, winner, updateBoard, resetGame } = useGame()

  return (
    <main className="game">
      <h1>Tic Tac Toe</h1>
      <section className="board">
        <Board board={board} updateBoard={updateBoard}/>
      </section>
      <section className="turn"> 
        <Turns turn={turn}/>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

