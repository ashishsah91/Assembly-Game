
import { languages } from "./languages"

import React from 'react'

import clsx from 'clsx'

function App(): React.JSX.Element {


  const [currentWord, setCurrentWord] = React.useState('react')

  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

  const alphabet: string = "abcdefghijklmnopqrstuvwxyz"

  const keyboardEle = alphabet.split("")
    .map((letter: string) =>
      <button key={letter}
        className={clsx('keyboard-chip',
          guessedLetters.includes(letter) && currentWord.includes(letter) && 'correct-key',
          guessedLetters.includes(letter) && !currentWord.includes(letter) && 'wrong-key')}
        onClick={() => onClickKey(letter)}>{letter}</button>
    )

  const wordEle = currentWord.split("").map((word, index) => <span className="letter-chip" key={index}>{word}</span>)

  const languageElem = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (<span style={styles} key={lang.name} className="lang-chip">
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

  return (
    <main>
      <header>
        <h1>Assembly: Endgame</h1>
        <p>Guess the world in under 8 attempts to keep the programming world safe from Assembly</p>
      </header>
      <section className="game-status">
        <h2>You Win!</h2>
        <p>Well Done! 🎉</p>
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

      <button className="new-game">New Game</button>

    </main>
  )
}

export default App
