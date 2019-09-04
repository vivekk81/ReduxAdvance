import * as actionTypes from '../actions/actionTypes'

const initialState = {
    results: []
}

const reducer = (state = initialState, action)=>{
    if(action.type === actionTypes.STORE_RESULT){
        return { ...state,
            results: state.results.concat({id: new Date(), value: action.result})
        }
    }
    else if(action.type === actionTypes.DELETE_RESULT){
        // #1 way to update array with mutating
        // let id = 2
        // const newArray = [...state.results]
        // newArray.splice(id,1)
        // #2 way
        let updatedArray = state.results.filter(result=> result.id !== action.resultElId)
        return { ...state, results: updatedArray }
    }
    return state
}

export default reducer