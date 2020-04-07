import * as actionType from '../actions/types/types'
import initialState from '../initialState'

const tempReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GO_NEXT_STEP:
            return {...state, currentStep: state.currentStep + 1}

        case actionType.GO_PREVIOUS_STEP:
            return {...state, currentStep: state.currentStep - 1}

        case actionType.DUMMY_ADD_CHOICE:
            // hint: if you use Array.push it won't work synchronous
            return {...state, choices: state.choices.concat(action.payload)}
        default:
            return state
    }
}

export default tempReducer;