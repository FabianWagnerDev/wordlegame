import React, { useEffect, useRef, useContext, useCallback } from 'react';
import Grid from './Grid';
import Keypad from './Keypad';
import ResultModal from './ResultModal';
import ErrorModal from './ErrorModal';
import { WordleContext } from '../App';
import useWordle from '../hooks/useWordle';

export default function Wordle() {
    const { solution, setSolutionWord, turn, setTurn, currentGuess, setCurrentGuess, guesses, setGuesses, setHistory, restartGame, restartCount } = useContext(WordleContext)

    const { isCorrect, setIsCorrect, usedKeys, setUsedKeys, showResultModal, setShowResultModal, handleKey, errorMsg, showErrorModal} = useWordle()

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted.current) {
            setTurn(0)
            setCurrentGuess('')
            setGuesses([...Array(6)])
            setHistory([])
            setUsedKeys({})
            setIsCorrect(false)
            setShowResultModal(false)
            setSolutionWord()
            document.activeElement.blur()
        } else {
          isMounted.current = true
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [restartCount])

    const handleKeyUp = useCallback(({ key }) => {
        handleKey(key)
    }, [handleKey])

    const handleKeyClick = useCallback((e) => {
        if(!e.target.hasAttribute('letterkey')) return
        const key = e.target.getAttribute('letterkey')
        handleKey(key)
    }, [handleKey])

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if(isCorrect && showResultModal === false) {
            setTimeout(() => setShowResultModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        if(turn > 5 && showResultModal === false) {
            setTimeout(() => setShowResultModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn, showResultModal, setShowResultModal])

    useEffect(() => {
        window.addEventListener('click', handleKeyClick)

        return () => window.removeEventListener('click', handleKeyClick)
    }, [handleKeyClick])

    return (
        <div>
            <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
            <Keypad usedKeys={usedKeys} />
            { showResultModal && <ResultModal isCorrect={isCorrect} 
                                              turn={turn} 
                                              solution={solution} 
                                              restartGame={restartGame} /> }
            { showErrorModal && <ErrorModal errorMsg={errorMsg} /> }
        </div>
    )
}
