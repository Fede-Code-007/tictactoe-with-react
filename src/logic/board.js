import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (boardToCheck) => {

    //Si encontramos alguna combinación ganadora, retornamos el ganador:
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }

    //Caso contrario, no hay ganador:
    return null
  }

export const checkEndGame = (newBoard) => {
    //Revisamos si todas las posiciones del tablero están llenas:
    return newBoard.every((square) => square !== null)
}