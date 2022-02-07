import React from 'react';
import { increment, decrement } from '../action/index'
export default function PlusMinus() {
    return (
        <div>
            <h1>Function Comonents</h1>
            <div className='box'>
                <button onClick={() => increment()}>+</button>
                <p>0</p>
                <button onClick={() => decrement()}>-</button>
            </div>
        </div>
    )
}
