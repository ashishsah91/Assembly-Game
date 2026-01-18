
import { getFarewellText } from "../utils"
import { languages } from "../languages"
import clsx from 'clsx'
import type {JSX} from 'react'
import type { GameStatusProps } from "../types"

export default function GameStatus({ isGameOver,
                                     isLastGueesedLetterWrong, 
                                     isGameWon, 
                                     isGameLost, 
                                     wrongGuessCount 
                                    }:GameStatusProps):JSX.Element {

    const gameStatusClass:string = clsx('game-status', {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGueesedLetterWrong
    })

    function renderGameStatusContent():JSX.Element | null {

        if (!isGameOver && isLastGueesedLetterWrong) {
            const returnText = getFarewellText(languages[wrongGuessCount - 1])
            return <p className="farewell-msg">{returnText}</p>
        }

        if (isGameWon) {
            return <>
                <h2>You Win!</h2>
                <p>Well Done! 🎉</p>
            </>
        } if (isGameLost) {
            return <>
                <h2>Game Over!</h2>
                <p>You lose! Better start learning Assembly 😔</p>
            </>
        }

        return null

    }


    return <section aria-live="polite" role="status" className={gameStatusClass}>
        {renderGameStatusContent()}
    </section>
}