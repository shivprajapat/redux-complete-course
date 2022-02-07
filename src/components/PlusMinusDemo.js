import React, { Component } from 'react';
import { increment, decrement } from '../action/index'

export default class PlusMinusDemo extends Component {
    render() {
        return (
            <div>
                <h1>Class Comonents</h1>
                <div className='box'>
                    <button onClick={() => decrement()}>-</button>
                    <p>0</p>
                    <button onClick={() => increment()}>+</button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch => {
    return {
        increment: (num) => dispatch(increment(num)),
        decrement: (num) => dispatch(decrement(num))
    }
})