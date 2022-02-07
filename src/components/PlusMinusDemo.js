import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../action/index'

class PlusMinusDemo extends Component {
    constructor(props) {
        super(props);
        console.log(props, 'props data');
    }
    render() {
        return (
            <div>
                <h1>Class Comonents</h1>
                <div className='box'>
                    <button onClick={() => this.props.decrement(1)}>-</button>
                    <p>{this.props.count}</p>
                    <button onClick={() => this.props.increment(2)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.changeCount
    }
}

const mapDispatchToProps = (dispatch => {
    return {
        increment: (num) => dispatch(increment(num)),
        decrement: (num) => dispatch(decrement(num))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PlusMinusDemo);