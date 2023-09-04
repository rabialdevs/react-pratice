import { INCREASE_VALUE } from "../actions/ActionTypes";


const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE_VALUE:
            return action.value

        default:
            return state;
    }
}

export default reducer;