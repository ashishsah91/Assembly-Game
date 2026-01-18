

import clsx from "clsx"
import type {JSX} from 'react'
import type { WordContainerProps } from "../types"

export default function WordContainer({
    currentWord,
    isGameLost,
    guessedLetters }
    : WordContainerProps):JSX.Element {

    const wordEle:JSX.Element[] = currentWord.split("")
        .map((word:string, index:number) =>
            <span className={clsx("letter-chip", isGameLost && "game-lost")} key={index}> {(!isGameLost) ?
                guessedLetters.includes(word) ? word : '' : word}
            </span>)

    return <section className="word-container">
        {wordEle}
    </section>
}