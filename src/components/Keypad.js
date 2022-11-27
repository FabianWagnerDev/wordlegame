import React from 'react';
import KeyRowFirst from './KeyRowFirst';
import KeyRowSecond from './KeyRowSecond';
import KeyRowThird from './KeyRowThird';

export default function Keypad({ usedKeys }) {

    return (
        <div className='keypad'>
            <KeyRowFirst usedKeys={usedKeys} />
            <KeyRowSecond usedKeys={usedKeys} />
            <KeyRowThird usedKeys={usedKeys} />
        </div>
    )
}
