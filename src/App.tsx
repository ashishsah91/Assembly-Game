
import { languages } from "./languages"

import React from 'react'

import clsx from 'clsx'

import { getFarewellText } from './utils'

import { getRandomWord } from "./utils"

import Confetti from 'react-confetti'

function App(): React.JSX.Element {

  const [currentWord, setCurrentWord] = React.useState(() => getRandomWord());
  
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

  const alphabet: string = "abcdefghijklmnopqrstuvwxyz"

  const wrongGuessCount = guessedLetters.reduce((acc, currentValue) =>
    acc = (!currentWord.includes(currentValue)) ? acc + 1 : acc, 0)

  const isGameWon = currentWord.split("").every((word) => guessedLetters.includes(word));
  const isGameLost = (wrongGuessCount === languages.length - 1) ? true : false;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const isLastGueesedLetterWrong = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);



  const gameStatusClass = clsx('game-status', {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGueesedLetterWrong
  })

  const keyboardEle = alphabet.split("")
    .map((letter: string) =>
      <button key={letter} disabled={isGameOver}
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        className={clsx('keyboard-chip',
          guessedLetters.includes(letter) && currentWord.includes(letter) && 'correct-key',
          guessedLetters.includes(letter) && !currentWord.includes(letter) && 'wrong-key')}
        onClick={() => onClickKey(letter)}>{letter}</button>
    )

  const wordEle = currentWord.split("")
    .map((word, index) =>
      <span className={clsx("letter-chip", isGameLost && "game-lost")} key={index}> {(!isGameLost) ?
        guessedLetters.includes(word) ? word : '' : word}
      </span>)

  const languageElem = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (<span style={styles} key={lang.name} className={clsx("lang-chip", wrongGuessCount >= index + 1 && 'lost')}>
      {lang.name}
    </span>)
  })

  function onClickKey(letter: string) {
    setGuessedLetters((prevVal) => {
      const lettersSet = new Set(prevVal)
      lettersSet.add(letter)
      return Array.from(lettersSet)
    }
    )
  }

  function renderGameStatusContent() {

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

  function resetGame() {
    setCurrentWord(() => getRandomWord());
    setGuessedLetters(() => [])
  }

  return (
    <main>
      {isGameWon && <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
      />}
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the world in under 8 attempts to keep the programming world safe from Assembly</p>
      </header>

      <section aria-live="polite" role="status" className={gameStatusClass}>
        {renderGameStatusContent()}
      </section>

      <section className="lang-container">
        {languageElem}
      </section>

      <section className="word-container">
        {wordEle}
      </section>

      {/* Combined visually-hidden aria-live region for status updates */}
      <section
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
        <p>Current word: {currentWord.split("").map(letter =>
          guessedLetters.includes(letter) ? letter + "." : "blank.")
          .join(" ")}</p>

      </section>

      <section className="keyboard">
        {keyboardEle}
      </section>

      {isGameOver && <button className="new-game" onClick={resetGame}>New Game</button>}

    </main>
  )
}

export default App
