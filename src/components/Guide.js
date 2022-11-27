import React from 'react';

export default function Guide({ closeGuide }) {

    return (
        <div className='guide-background close-guide-element' onClick={closeGuide}>
            <div className='guide-container'>
                <div className='guide-top-bar'>
                    <h2>Game Guide</h2>
                    <span className='btn-close-guide close-guide-element' onClick={closeGuide}>X</span>
                </div>
                <div className='guide-container-content'>
                    <p className='guide-paragraph'>Erraten Sie das versteckte, englische Wort in 6 Versuchen. Die Farbe der Buchstaben ändert sich, um anzuzeigen, wie nah Sie dran sind.</p>
                    <p className='guide-paragraph'>Um das Spiel zu starten, geben Sie einfach ein beliebiges Wort ein, zum Beispiel:</p>
                    <div className='word'>
                        <div className='letter green'>S</div>
                        <div className='letter grey'>U</div>
                        <div className='letter grey'>P</div>
                        <div className='letter yellow'>E</div>
                        <div className='letter grey'>R</div>
                    </div>
                    <div className='grey-box'>
                        <div className='box-row'>
                            <b className='small-letter'>U</b>
                            <p>,</p>
                            <b className='small-letter'>P</b>
                            <p>,</p>
                            <b className='small-letter'>R</b>
                            <p>sind nicht im gesuchten Wort.</p>
                        </div>
                        <div className='box-row'>
                            <b className='small-letter yellow'>E</b>
                            <p>ist im Wort, aber an der falschen Stelle.</p>
                        </div>
                        <div className='box-row'>
                            <b className='small-letter green'>S</b>
                            <p>ist im Wort und an der richtigen Stelle.</p>
                        </div>
                    </div>
                    <p>Ein weiterer Versuch, passende Buchstaben im Zielwort zu finden.</p>
                    <div className='word'>
                        <div className='letter green'>S</div>
                        <div className='letter green'>M</div>
                        <div className='letter grey'>O</div>
                        <div className='letter grey'>K</div>
                        <div className='letter green'>E</div>
                    </div>
                    <p>so nah!</p>
                    <div className='word'>
                        <div className='letter green'>S</div>
                        <div className='letter green'>M</div>
                        <div className='letter green'>I</div>
                        <div className='letter green'>L</div>
                        <div className='letter green'>E</div>
                    </div>
                    <p>Wort erraten! 🏆</p>
                </div>
            </div>
        </div>
    )
}
