

import clsx from "clsx"
import type { JSX } from 'react'
import type { KeyboardProps } from "../types"

export default function Keyboard({ alphabet,
    isGameOver,
    guessedLetters,
    currentWord,
    onClickKey
}: KeyboardProps): JSX.Element {

    const keyboardEle:JSX.Element[] = alphabet.split("")
        .map((letter: string) =>
            <button key={letter} disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`}
                className={clsx('keyboard-chip',
                    guessedLetters.includes(letter) && currentWord.includes(letter) && 'correct-key',
                    guessedLetters.includes(letter) && !currentWord.includes(letter) && 'wrong-key')}
                onClick={() => onClickKey(letter)}>{letter}</button>
        )

    return <section className="keyboard">
        {keyboardEle}
    </section>
}