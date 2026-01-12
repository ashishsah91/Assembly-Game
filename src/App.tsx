
import { languages } from "./languages"

import React from 'react'

import clsx from 'clsx'

function App(): React.JSX.Element {


  const [currentWord, setCurrentWord] = React.useState('react')

  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

  const alphabet: string = "abcdefghijklmnopqrstuvwxyz"

  const wrongGuessCount = guessedLetters.reduce((acc, currentValue) =>
    acc = (!currentWord.includes(currentValue)) ? acc + 1 : acc, 0)

  const isGameWon = currentWord.split("").every((word) => guessedLetters.includes(word));
  const isGameLost = (wrongGuessCount === languages.length - 1) ? true : false;
  const isGameOver = isGameWon || isGameLost;

  console.log("Wrong Guess Count " + wrongGuessCount);

  const keyboardEle = alphabet.split("")
    .map((letter: string) =>
      <button key={letter}
        className={clsx('keyboard-chip',
          guessedLetters.includes(letter) && currentWord.includes(letter) && 'correct-key',
          guessedLetters.includes(letter) && !currentWord.includes(letter) && 'wrong-key')}
        onClick={() => onClickKey(letter)}>{letter}</button>
    )

  const wordEle = currentWord.split("")
    .map((word, index) =>
      <span className="letter-chip" key={index}>{guessedLetters.includes(word) ? word : ''}</span>)

  const languageElem = languages.map((lang, index) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (<span style={styles} key={lang.name} className={clsx("lang-chip", wrongGuessCount >= index + 1 && 'lost')}>
      {lang.name}
    </span>)
  })

  console.log(guessedLetters);

  function onClickKey(letter: string) {
    setGuessedLetters((prevVal) => {
      const lettersSet = new Set(prevVal)
      lettersSet.add(letter)
      return Array.from(lettersSet)
    }
    )
  }

  const gameStatusClass = clsx('game-status', {
    won: isGameWon,
    lost: isGameLost
  })

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the world in under 8 attempts to keep the programming world safe from Assembly</p>
      </header>

      <section className={gameStatusClass}>
        {
          (isGameOver) ?
            (isGameWon) ?
              <>
                <h2>You Win!</h2>
                <p>Well Done! 🎉</p>
              </> : <>
                <h2>Game Over!</h2>
                <p>You lose! Better start learning Assembly 😔</p>
              </> : null
        }
      </section>

      <section className="lang-container">
        {languageElem}
      </section>

      <section className="word-container">
        {wordEle}
      </section>

      <section className="keyboard">
        {keyboardEle}
      </section>

      {isGameOver && <button className="new-game">New Game</button>}

    </main>
  )
}

export default App
