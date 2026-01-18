
import type {JSX} from 'react'
import type { NewGameBtnProps } from '../types'

export default function NewGameBtn({ isGameOver, resetGame }:NewGameBtnProps):JSX.Element | null{
    if (!isGameOver) {
        return null
    } else {
        return <button className="new-game" onClick={resetGame}>New Game</button>
    }
}