
import { languages } from "./languages"
import React from 'react'
import { getRandomWord } from "./utils"
import ConfettiContainer from "./components/ConfettiContainer"
import Header from "./components/Header"
import GameStatus from "./components/GameStatus"
import LanguageContainer from "./components/LanguageContainer"
import WordContainer from "./components/WordContainer"
import Keyboard from "./components/Keyboard"
import NewGameBtn from "./components/NewGameBtn"
import AriaLiveStatus from "./components/AriaLiveStatus"

function App(): React.JSX.Element {

  // State Values
  const [currentWord, setCurrentWord] = React.useState<string>(():string => getRandomWord());
  const [guessedLetters, setGuessedLetters] = React.useState<string[]>([]);

 // Derived values
  const wrongGuessCount:number = guessedLetters.reduce((acc, currentValue) =>
    acc = (!currentWord.includes(currentValue)) ? acc + 1 : acc, 0)
  const isGameWon:boolean = currentWord.split("").every((word:string):boolean => guessedLetters.includes(word));
  const isGameLost:boolean = (wrongGuessCount === languages.length - 1) ? true : false;
  const isGameOver:boolean = isGameWon || isGameLost;
  const lastGuessedLetter:string = guessedLetters[guessedLetters.length - 1];
  const isLastGueesedLetterWrong:boolean | '' = lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  // Constant Values
  const alphabet: string = "abcdefghijklmnopqrstuvwxyz"

  function onClickKey(letter: string):void {
    setGuessedLetters((prevVal:string[]):string[] => {
      const lettersSet = new Set(prevVal)
      lettersSet.add(letter)
      return Array.from(lettersSet)
    }
    )
  }

  function resetGame():void {
    setCurrentWord(() => getRandomWord());
    setGuessedLetters(() => [])
  }

  return (
    <main>
      <ConfettiContainer isGameWon={isGameWon}/>
      <Header/>
      <GameStatus isGameOver={isGameOver} 
                  isLastGueesedLetterWrong={isLastGueesedLetterWrong}
                  isGameWon={isGameWon}
                  isGameLost={isGameLost}
                  wrongGuessCount={wrongGuessCount}
                  />

      <LanguageContainer wrongGuessCount={wrongGuessCount}/>
      <WordContainer currentWord={currentWord} isGameLost={isGameLost} guessedLetters={guessedLetters}/>

      {/* Combined visually-hidden aria-live region for status updates */}
      <AriaLiveStatus 
         currentWord={currentWord} 
         guessedLetters={guessedLetters} 
         lastGuessedLetter={lastGuessedLetter}
         />

      <Keyboard alphabet={alphabet} 
                isGameOver={isGameOver} 
                guessedLetters={guessedLetters} 
                currentWord={currentWord}
                onClickKey={onClickKey}/>

     <NewGameBtn isGameOver={isGameOver} resetGame={resetGame}/>

    </main>
  )
}

export default App
