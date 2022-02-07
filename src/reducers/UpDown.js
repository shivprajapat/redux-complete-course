import { DECREMENT, INCREMENT } from "../constants";

const initialState = 0;
const changeCount = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;

    }
}

export default changeCount;