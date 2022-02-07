import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../action/index'
export default function PlusMinus() {
    const dispatch = useDispatch();
    // useSelector
    const count = useSelector((state) => state.changeCount);
    return (
        <div>
            <h1>Function Comonents</h1>
            <div className='box'>
                <button onClick={() => dispatch(increment(1))}>+</button>
                <p>{count}</p>
                <button onClick={() => dispatch(decrement(2))}>-</button>
            </div>
        </div>
    )
}
