import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import {loadState, saveState} from '../local-storage/localStorage'
import throttle from 'lodash.throttle'

const persistedState = loadState()

const store = createStore(
    rootReducer,
    persistedState
)

// this listeners says that if store changed, update to localstorage store.
// however it should not be called much, therefore we use lodash utility called throttle to solve this
// 
store.subscribe(
    // temp should be replaced with reducer name
    throttle(
        () => saveState(store.getState()), 100)
)

export default store
