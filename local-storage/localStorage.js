// this functions are for storing redux store in local storage


const STATE_NAME = 'dizz_redux_store'

export const loadState = () => {
    // why we use try - catch
    // because user can don't allow us to use localStorage

    console.log('load state called')
    try {
        let serializedState = localStorage.getItem(STATE_NAME)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        return undefined
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(STATE_NAME, serializedState)
    } catch {
        // ignore write errors
    }
}