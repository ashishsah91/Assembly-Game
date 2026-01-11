
import { languages } from "./languages"

import React from 'react'

function App(): React.JSX.Element {


  const [currentWord, setCurrentWord] = React.useState('react')

  const alphabet:string = "abcdefghijklmnopqrstuvwxyz"


  const wordEle = currentWord.split("").map((word)=><span className="letter-chip">{word}</span>)

  const languageElem = languages.map((lang) => {
    const styles = {
      backgroundColor: lang.backgroundColor,
      color: lang.color
    }
    return (<span style={styles} key={lang.name} className="lang-chip">
      {lang.name}
    </span>)
  })

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

    </main>
  )
}

export default App
