import React from 'react';

export default function Row({ guess, currentGuess }) {

    if(guess) {
            return (
                <div className='row past'>
                    {guess.map((letter, index) => (
                        <div className={`letter ${letter.color}`} key={index}>{letter.key}</div>
                    ))}
                </div>
            )
    }

    if(currentGuess) {
        let currentLetters = currentGuess.split('')

        return (
            <div className='row current'>
                {currentLetters.map((letter, index) => (
                    <div className='letter filled' key={index}>{letter}</div>
                ))}
                {[...Array(5 - currentLetters.length)].map((undefi,index) => (
                    <div className='letter' key={index}></div>
                ))}
            </div>
        )
    }

    return (
        <div className='row'>
            <div className='letter'></div>
            <div className='letter'></div>
            <div className='letter'></div>
            <div className='letter'></div>
            <div className='letter'></div>
        </div>
    )
}
