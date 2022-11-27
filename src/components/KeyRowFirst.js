import React, { useState } from 'react';

export default function KeyRowFirst({ usedKeys }) {

    const [letterRowFirst] = useState([
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'e' },
        { key: 'f' },
        { key: 'g' },
        { key: 'h' },
        { key: 'i' },
        { key: 'j' },
    ])

  return (
    <div className='keyrow'>
        {letterRowFirst.map(letter => {
            const color = usedKeys[letter.key]

            return (
                <div className={`key ${color}`} letterkey={letter.key} key={letter.key}>{letter.key}</div>
            )
        })}
    </div>
  )
}
