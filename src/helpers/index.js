export const actionCreator = (type) => {
    return value => ({type, value})
}

export const createReducer = (initialState, cb) => {
    return function (state = initialState, action) {
        const switchableObject = cb(state, action)
        if(switchableObject.hasOwnProperty(action.type)) {
            if(typeof switchableObject[action.type] !== 'function') {
                throw new TypeError('wrong type of object value, must be a function')
            } else {
                const value = switchableObject[action.type]()
                return value !== undefined ? value : state
            }
        }
        return state
    }
}

export const request = (url, dispatch, action) => {
    fetch(`https://api.thecatapi.com/v1/${url}`)
        .then(res => res.json())
        .then(json => dispatch(action(json)))
}