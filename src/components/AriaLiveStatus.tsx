
import { languages } from "../languages"
import type { JSX } from 'react'
import type { AriaLiveStatusProps } from "../types"


export default function AriaLiveStatus({ currentWord, lastGuessedLetter, guessedLetters }
    : AriaLiveStatusProps): JSX.Element {

    return <section
        className="sr-only"
        aria-live="polite"
        role="status"
    >
        <p>
            {currentWord.includes(lastGuessedLetter) ?
                `Correct! The letter ${lastGuessedLetter} is in the word.` :
                `Sorry, the letter ${lastGuessedLetter} is not in the word.`
            }
            You have {languages.length - 1} attempts left.
        </p>
        <p>Current word: {currentWord.split("").map((letter: string) =>
            guessedLetters.includes(letter) ? letter + "." : "blank.")
            .join(" ")}</p>

    </section>
}