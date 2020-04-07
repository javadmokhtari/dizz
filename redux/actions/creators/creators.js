import * as actionType from '../types/types'

// hint: actionCreator must return an OBJECT
export const goNextStep = () => {
    return {
        type: actionType.GO_NEXT_STEP
    }
    
}

export const goPreviousStep = () => {
    return {
        type: actionType.GO_PREVIOUS_STEP
    }
    
}

export const dummyAddChoice = (payload) => {
    return {
        type: actionType.DUMMY_ADD_CHOICE,
        payload: payload
    }
    
}
