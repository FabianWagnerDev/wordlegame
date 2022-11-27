import React from 'react';

export default function Modal({ isCorrect, turn, solution, restartGame }) {

    const closeModal = (restart) => {
        const currentModal = document.querySelector('.result-modal')
        currentModal.style.animation = 'shrinkElementOutOfViewport 420ms ease-in-out forwards'

        const btnClose = document.querySelector('.btn-close')
        btnClose.style.animation = 'shrinkElementOutOfViewport 420ms ease-in-out forwards'
        
        setTimeout(() => {
            const darkOverlay = document.querySelector('.dark-overlay-result')
            darkOverlay.style.display = 'none'
            if(restart === true) {
                restartGame()
            }
        }, 420)
    }

    return (
        <div className='dark-overlay-result'>
            <div className='btn-close' onClick={closeModal}>X</div>
            {isCorrect && (
                <div className='result-modal'>
                    <h1>You win!</h1>
                    <p className='solution-word'>Solution word:<span className='solution'> {solution}</span></p>
                    <p className='total-guesses'>Total guesses: {turn} guess</p>
                    <button className='btn-play-again' onClick={() => {closeModal(true)}}>Play Again
                        <svg className='dice' xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 256 256"><g fill="#fff" strokeMiterlimit="10" fontFamily="none" fontSize="none" fontWeight="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M21.5 0h-19A2.503 2.503 0 000 2.5v19C0 22.879 1.122 24 2.5 24h19c1.378 0 2.5-1.121 2.5-2.5v-19C24 1.122 22.878 0 21.5 0zM23 21.5c0 .827-.673 1.5-1.5 1.5h-19c-.827 0-1.5-.673-1.5-1.5v-19C1 1.673 1.673 1 2.5 1h19c.827 0 1.5.673 1.5 1.5z" transform="scale(10.66667)"></path><path d="M7 5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1zM7 15c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3a1.001 1.001 0 010-2 1.001 1.001 0 010 2zM17 5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1zM17 15c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3a1.001 1.001 0 010-2 1.001 1.001 0 010 2z" transform="scale(10.66667)"></path></g></svg>
                    </button>
                </div>
            )}
            {!isCorrect && (
                <div className='result-modal'>
                    <h1>Nevermind!</h1>
                    <p className='solution-word'>Solution word:<span className='solution'> {solution}</span></p>
                    <p className='better-luck'>Better luck next time!</p>
                    <button className='btn-play-again' onClick={() => {closeModal(true)}}>Play Again
                        <svg className='dice' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><g fill="#fff" strokeMiterlimit="10" fontFamily="none" fontSize="none" fontWeight="none" textAnchor="none" style={{ mixBlendMode: "normal" }}><path d="M21.5 0h-19A2.503 2.503 0 000 2.5v19C0 22.879 1.122 24 2.5 24h19c1.378 0 2.5-1.121 2.5-2.5v-19C24 1.122 22.878 0 21.5 0zM23 21.5c0 .827-.673 1.5-1.5 1.5h-19c-.827 0-1.5-.673-1.5-1.5v-19C1 1.673 1.673 1 2.5 1h19c.827 0 1.5.673 1.5 1.5z" transform="scale(10.66667)"></path><path d="M7 5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1zM7 15c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3a1.001 1.001 0 010-2 1.001 1.001 0 010 2zM17 5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3c-.551 0-1-.449-1-1 0-.551.449-1 1-1 .551 0 1 .449 1 1 0 .551-.449 1-1 1zM17 15c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zm0 3a1.001 1.001 0 010-2 1.001 1.001 0 010 2z" transform="scale(10.66667)"></path></g></svg>
                    </button>
                </div>
            )}
        </div>
    )
}
