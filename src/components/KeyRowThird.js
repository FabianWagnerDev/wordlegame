import React, { useState } from 'react';

export default function KeyRowThird({ usedKeys }) {

    const [letterRowThird] = useState([
        { key: 'Backspace' },
        { key: 'u' },
        { key: 'v' },
        { key: 'w' },
        { key: 'x' },
        { key: 'y' },
        { key: 'z' },
        { key: 'Enter'},
    ])

  return (
    <div className='keyrow'>
        {letterRowThird.map(letter => {
            const color = usedKeys[letter.key]

            if(letter.key === 'Backspace') {
                return (
                    <div className='key lg backspace' letterkey={letter.key} key={letter.key}>
                        <svg className='backspace-icon' letterkey={letter.key} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path letterkey={letter.key} d="M0 0h24v24H0V0z" fill="none"/><path letterkey={letter.key} d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"/></svg>
                    </div>
                )
            } else if(letter.key === 'Enter') {
                return (
                    <div className='key lg enter' letterkey={letter.key} key={letter.key}>Enter</div>
                )
            } else {
                return (
                    <div className={`key ${color}`} letterkey={letter.key} key={letter.key}>{letter.key}</div>
                )
            }
        })}
    </div>
  )
}
