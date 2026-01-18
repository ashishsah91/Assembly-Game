

export type Language = {
    name: string,
    backgroundColor: string,
    color: string
}

export type AriaLiveStatusProps = {
    currentWord: string,
    lastGuessedLetter: string,
    guessedLetters: string[]
}

export type GameStatusProps = {
    isGameOver:boolean,
    isLastGueesedLetterWrong:boolean | '',
    isGameWon:boolean,
    isGameLost:boolean,
    wrongGuessCount:number
}

export type KeyboardProps = {
    alphabet: string,
    isGameOver: boolean,
    guessedLetters: string[],
    currentWord: string,
    onClickKey: (letter: string) => void
}

export type LanguageContainerProps = {
     wrongGuessCount: number
}

export type NewGameBtnProps = {
    isGameOver:boolean,
    resetGame:()=>void
}

export type WordContainerProps = {
    currentWord: string,
    isGameLost: boolean,
    guessedLetters: string[]
}

export type ConfettiContainerProps = {
    isGameWon:boolean
}