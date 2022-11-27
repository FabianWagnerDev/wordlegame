import React, { useState, useEffect } from 'react';
import Wordle from './components/Wordle';
import useSolution from './hooks/useSolution';
import Header from './components/Header';
import Guide from './components/Guide';
export const WordleContext = React.createContext('')

export default function App() {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState([...Array(6)])
  const [history, setHistory] = useState([])
  const [solution, setSolution] = useState(null)
  const [restartCount, setRestartCount] = useState(0)
  const solutionData = useSolution()

  useEffect(() => {
    setSolutionWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function setSolutionWord() {
    const randomSolution = solutionData[Math.floor(Math.random() * solutionData.length)]
    setSolution(randomSolution.word)
  }

  function restartGame() {
      setRestartCount(prev => prev + 1)
  }

  function openGuide() {
    const guideModal = document.querySelector('.guide-background')
    guideModal.style.display = 'flex'
  }

  function closeGuide(e) {
    const guideBackground = document.querySelector('.guide-background')
    if(!e.target.matches('.close-guide-element')) return
    guideBackground.style.display = 'none'
  }

  return (
      <div className="App">
          <Header openGuide={openGuide} restartGame={restartGame} />
          { solution && 
          <WordleContext.Provider value={{ turn, setTurn, currentGuess, setCurrentGuess, guesses, setGuesses, history, setHistory, solution, setSolutionWord, restartGame, restartCount }}>
              <Wordle />
          </WordleContext.Provider> }
          <Guide closeGuide={closeGuide} />
      </div>
  );
}
