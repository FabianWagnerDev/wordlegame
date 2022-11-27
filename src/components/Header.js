import React from 'react';
import WordlegameLogo from '../img/wordle-logo.svg';

export default function Header({ openGuide, restartGame }) {

    return (
        <div className='header outer'>
            <div className='header inner'>
                <div className='inner left'>
                    <button className='btn-header btn-guide' onClick={openGuide}>Guide</button>
                </div>
                <img className='logo' src={WordlegameLogo} alt="wordlegame-logo"/>
                <div className='inner right'>
                    <button className='btn-header btn-restart' onClick={restartGame}>Restart</button>
                </div>
            </div>
        </div>
    )
}
