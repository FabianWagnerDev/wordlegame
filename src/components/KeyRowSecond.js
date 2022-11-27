import React, { useState } from 'react';

export default function KeyRowSecond({ usedKeys }) {

const [letterRowSecond] = useState([
        { key: 'k' },
        { key: 'l' },
        { key: 'm' },
        { key: 'n' },
        { key: 'o' },
        { key: 'p' },
        { key: 'q' },
        { key: 'r' },
        { key: 's' },
        { key: 't' },
    ])

  return (
    <div className='keyrow'>
        {letterRowSecond.map(letter => {
            const color = usedKeys[letter.key]

            return (
                <div className={`key ${color}`} letterkey={letter.key} key={letter.key}>{letter.key}</div>
            )
        })}
    </div>
  )
}
