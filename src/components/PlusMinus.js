import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../action/index'
export default function PlusMinus() {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Function Comonents</h1>
            <div className='box'>
                <button onClick={() => dispatch(increment())}>+</button>
                <p>0</p>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>
        </div>
    )
}
