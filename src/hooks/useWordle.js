import { useState, useContext } from 'react';
import { WordleContext } from '../App';
let closeErrorModal
 
const useWordle = () => {
    const [showResultModal, setShowResultModal] = useState(false)
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

    const { turn, setTurn, currentGuess, setCurrentGuess, setGuesses, history, setHistory, solution } = useContext(WordleContext)

    const handleKey = (key) => {

        if(isCorrect) return

        if(key === 'Enter') {
            if (turn > 5) {
                triggerErrorModal('you used all your guesses')
                return
            }
            if (history.includes(currentGuess)) {
                triggerErrorModal('you already tried that word')
                return
            }
            if (currentGuess.length !== 5) {
                triggerErrorModal('word must be 5 letters long')
                return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)
        }

        if(key === 'Backspace' && !showErrorModal) {
            setCurrentGuess(prev => prev.slice(0, -1))
            return
        }

        if(key === 'Backspace' && showErrorModal) {
            clearTimeout(closeErrorModal)
            setShowErrorModal(false)
            return
        }

        if(/^[A-Za-z]$/.test(key)) {
            if(currentGuess.length < 5) {
                setCurrentGuess(prev => prev + key)
            }
        }
    }

    const formatGuess = () => {
        let solutionArray  = [...solution]
        let formattedGuess = [...currentGuess].map((letter) => {
            return {key: letter, color: 'grey'}
        })

        // find exact matches, clr greeen
        formattedGuess.forEach((letter,i) => {
            if(solutionArray[i] === letter.key) {
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        }) 

        // find matches, clr yellow
        formattedGuess.forEach((letter,i) => {
            if(solutionArray.includes(letter.key) && letter.color !== 'green') {
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(letter.key)] = null
            }
        })

        return formattedGuess
    }

    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        // store tried keyboard letters + color indicator
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}

            formattedGuess.forEach(letter => {                 // [ {key: 'a', color: 'grey'}, ...]
                const currentColor = newKeys[letter.key]

                if(letter.color === 'green') {
                    newKeys[letter.key] = 'green'
                    return
                }
                if(letter.color === 'yellow' && currentColor !== 'green') {
                    newKeys[letter.key] = 'yellow'
                    return 
                }
                if(letter.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[letter.key] = 'grey'
                    return
                }
            })

            return newKeys
        })
        setCurrentGuess('')
    }

    const triggerErrorModal = (newErrorMsg) => {
        setErrorMsg(newErrorMsg)
        setShowErrorModal(true)
        closeErrorModal = setTimeout(closeModal, 1900)
    }

    const closeModal = () => {
        setShowErrorModal(false)
    }

    return { isCorrect, setIsCorrect, usedKeys, setUsedKeys, showResultModal, setShowResultModal, handleKey, errorMsg, showErrorModal }
}

export default useWordle;