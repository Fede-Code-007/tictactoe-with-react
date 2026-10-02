import { useState } from 'react'
import { TURNS } from '../constants.js'
import { checkWinner, checkEndGame } from '../logic/board.js'
import { saveGameToStorage, resetGameStorage } from '../logic/storage.js'
import confetti from 'canvas-confetti'


export const useGame = () => {
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board')
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })
    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ?? TURNS.O
    })

    const [winner, setWinner] = useState(() => {
        const winnerFromStorage = window.localStorage.getItem('winner')
        return winnerFromStorage ? JSON.parse(winnerFromStorage) : null
    })

    const updateBoard = (index) => {
        if (board[index] || winner) return //No actualizamos la posición si tiene algo o ya hay ganador.
        
        //Actualizamos el tablero:
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        //Actualizamos el turno:
        const newTurn = turn === TURNS.O ? TURNS.X : TURNS.O
        setTurn(newTurn)
        
        //Guardamos el juego en el localStorage:
        saveGameToStorage(newBoard, newTurn, null)

        //Revisamos si hay ganador:
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            confetti()
            setWinner(newWinner)
            saveGameToStorage(newBoard, newTurn, newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false) //Empate
            saveGameToStorage(newBoard, newTurn, false)
        }
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.O)
        setWinner(null)
        resetGameStorage()
    }
    return { board, turn, winner, updateBoard, resetGame  }
}