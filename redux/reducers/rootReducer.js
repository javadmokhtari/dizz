import tempReducer from './tempReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    temp: tempReducer
})

export default rootReducer