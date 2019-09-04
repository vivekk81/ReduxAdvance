import * as actionTypes from '../actions/actionTypes'

const initialState = {
    counter: 0,
}

const reducer = (state = initialState, action)=>{
    if(action.type === actionTypes.INCREMENT){
        // one way of mutating object
        const newState = Object.assign({}, state)
        newState.counter = state.counter + 1
        return newState
    }else if(action.type === actionTypes.DECREMENT){
        return { ...state, counter: state.counter - 1 }
    }else if(action.type === actionTypes.ADD){
        return { ...state, counter: state.counter + action.value }
    }else if(action.type === actionTypes.SUBTRACT){
        return { ...state, counter: state.counter - action.value }
    }
    return state
}

export default reducer