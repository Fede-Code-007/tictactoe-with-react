import { Square } from './Square.jsx'
import { TURNS } from '../constants.js'

export const Turns = ({ turn }) => {
    return (
        <>
            <Square isSelected={turn === TURNS.O}> {TURNS.O}</Square>
            <Square isSelected={turn === TURNS.X}> {TURNS.X}</Square>
        </>
    )
}